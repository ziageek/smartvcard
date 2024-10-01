<template>
  <pre v-show="false" ref="vCard">
BEGIN:VCARD
VERSION:3.0
N;CHARSET=UTF-8:{{ getSplitName }}
FN:{{ getFullname }}
ORG:{{ vCard.ORG }}
COMPANY:{{ vCard.COMPANY }}
TITLE:{{ vCard.TITLE }}
<!-- ADR;;TYPE=office;CHARSET=UTF-8:{{ vCard.ADDRESS }} -->
ADR;CHARSET=UTF-8;TYPE=WORK:;;{{ vCard.ADDRESS.replace(/,/g, "") }}
TEL;TYPE=Work,pref:{{ vCard.TEL1 }}
TEL;CELL;TYPE=Mobile,VOICE:{{ vCard.MOB }}
TEL;TYPE=WORK,VOICE:{{ vCard.WORK }}
<!-- TEL;CELL;TYPE=FAX:VOICE:{{ vCard.FAX }} -->
TEL;TYPE=Work,Fax:{{ vCard.FAX }}
TEL;TYPE=Home,VOICE:{{ vCard.HOME }}
TEL;TYPE=sms:{{ vCard.sms }}
URL;TYPE=Messenger:{{ vCard.messenger }}
TEL;TYPE=SIGNAL:{{ vCard.signal }}
EMAIL;TYPE=Email:{{ vCard.EMAIL }}
URL;TYPE=Digital Business Card:{{ vCard.hostedURL }}

<!-- URL:{{ vCard.URL }} -->
<!-- URL:{{ vCard.URL }} -->
URL;TYPE=Location:{{ vCard.LOCATION }}
KEY:OPENPGP4FPR:{{ vCard.KEY }}
UID:{{ vCard.UID }}
URL;TYPE=Website:{{ vCard.website }}

URL;TYPE=Calendar:{{ vCard.Calendar }}
URL;TYPE=WhatsApp:{{ vCard.WHATSAPP }}
URL;TYPE=WeChat:{{ vCard.WeChat }}
<!-- URL:{{ vCard.website }} -->
{{ getURLs }}

PHOTO;ENCODING=b:{{ vCard.PHOTO  }}
NOTE;CHARSET=UTF-8:{{ vCard.NOTE }}

END:VCARD</pre>
</template>

<script>
import { createAvatar } from './../utils/api.js'
export default {
  props: ['vCard'],
  data() {
    return {
      photo: null
    }
  },
  computed: {
    getURLs() {
      return this.vCard.urls.map(e => `URL;TYPE=${e.title}:${e.url}`).join('\n')
    },
    getSplitName() {
      let pr = this.vCard.pr
      let fn = this.vCard.fn
      let ln = this.vCard.ln
      // return `${ln ? ln : ''};${pr ? pr : ''};${fn ? fn : ''};;`

      return `${ln ? ln : ''};${fn ? fn : ''};;${pr ? pr + ' ' : ' '};`
    },
    getFullname() {
      let pr = this.vCard.pr
      let fn = this.vCard.fn
      let ln = this.vCard.ln
      return (pr + fn + ln).length
        ? `${pr ? pr + ' ' : ' '}${fn ? fn : ''}${ln ? ' ' + ln : ''}`
        : null
    },
    async getAvatar() {
      if (this.vCard.fn !== null && this.vCard.ln !== null) {
        createAvatar(this.genInfo.fname, this.genInfo.lname)
          .then(res => {
            return res
          })
          .catch(err => console.log(err))
      }
    }
  }
}
</script>
