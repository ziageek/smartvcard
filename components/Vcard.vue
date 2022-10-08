<template>
  <pre v-show="false" ref="vCard">
BEGIN:VCARD
VERSION:3.0
N:{{ getSplitName }}
FN:{{ getFullname }}
ORG:{{ vCard.ORG }}
COMPANY:{{ vCard.COMPANY }}
TITLE:{{ vCard.TITLE }}
ADR;CHARSET=UTF-8:{{ vCard.ADDRESS }}
TEL;TYPE=work,pref:{{ vCard.TEL1 }}
TEL;CELL;TYPE=mobile,VOICE:{{ vCard.MOB }}
TEL;CELL;TYPE=Office,VOICE:{{ vCard.WORK }}
TEL;CELL;TYPE=FAX,VOICE:{{ vCard.FAX }}
TEL;TYPE=HOME,VOICE:{{ vCard.HOME }}
TEL;TYPE=SMS:{{ vCard.sms }}
TEL;TYPE=SIGNAL:{{ vCard.signal }}
EMAIL;TYPE=Email:{{ vCard.EMAIL }}
URL;TYPE=Digital Business Card:{{ vCard.hostedURL }}
<!-- URL:{{ vCard.URL }} -->
URL;TYPE=Location:{{ vCard.LOCATION }}
KEY:OPENPGP4FPR:{{ vCard.KEY }}
UID:{{ vCard.UID }}
URL;TYPE=Website:{{ vCard.website }}
URL;TYPE=WHATSAPP:{{ vCard.WHATSAPP }}

<!-- URL:{{ vCard.website }} -->
{{ getURLs }}

PHOTO;ENCODING=b:{{ vCard.PHOTO  }}
NOTE;CHARSET=UTF-8:{{ vCard.NOTE }}

END:VCARD</pre>
</template>

<script>
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
      let fn = this.vCard.fn
      let ln = this.vCard.ln
      return `${ln ? ln : ''};${fn ? fn : ''};;;`
    },
    getFullname() {
      let fn = this.vCard.fn
      let ln = this.vCard.ln
      return (fn + ln).length ? `${fn ? fn : ''}${ln ? ' ' + ln : ''}` : null
    }
  }
}
</script>
