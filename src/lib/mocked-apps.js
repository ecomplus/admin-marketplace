import { i18n } from '@ecomplus/utils'
import { fetchStore } from '@ecomplus/auth'
import iconAnalytics from './../assets/apps-icons/analytics.png'
import iconCompreeconfie from './../assets/apps-icons/compre-confie.png'
import iconEbit from './../assets/apps-icons/ebit.png'
import iconGmcRating from './../assets/apps-icons/gmc-ratings.png'
import iconTawkto from './../assets/apps-icons/tawkto.png'
import iconA55 from './../assets/apps-icons/a55.png'

const openNewTab = url => window.open(url, '_blank').focus()

const openCmsWidget = slug => {
  fetchStore()
    .then(({ domain }) => {
      if (domain) {
        openNewTab(`https://${domain}/admin/#/collections/widgets/entries/${slug}`)
      }
    })
    .catch(console.error)
}

const openWhatsapp = appName => {
  const msg = `Olá, gostaria de conversar com um parceiro sobre a integração com ${appName}`
  openNewTab(`https://wa.me/553194720048/?text=${encodeURIComponent(msg)}`)
}

export default [
  {
    listTitle: i18n({
      pt_br: 'Frente de loja',
      en_us: 'Storefront'
    }),
    apps: [{
      title: 'Google Analytics',
      icon: iconAnalytics,
      short_description: 'Tracking GA Universal Analytics simples com pageviews e eventos de comércio',
      clicked () {
        openCmsWidget('analytics')
      }
    }, {
      title: 'Facebook Pixel',
      icon: null,
      short_description: 'Disparo de eventos de visualização, carrinho e checkout via FB Pixel',
      clicked () {
        openCmsWidget('fb-pixel')
      }
    }, {
      title: 'Google Tag Manager',
      icon: null,
      short_description: 'Tracking customizável e eventos para enhanced ecommerce com data layer do GTM',
      clicked () {
        openCmsWidget('tag-manager')
      }
    }, {
      title: 'GMC ratings',
      icon: iconGmcRating,
      short_description: 'Avaliações gratuitas da loja pelo Google Merchant Center',
      clicked () {
        openCmsWidget('gmc-ratings')
      }
    }, {
      title: 'Tawk.to',
      icon: iconTawkto,
      short_description: 'Widget de chat 100% gratuito, multiusuário e amplamente configurável',
      clicked () {
        openCmsWidget('tawkto')
      }
    }, {
      title: 'Compre & Confie',
      icon: iconCompreeconfie,
      short_description: 'Colher avaliações de compradores com Compre & Confie',
      clicked () {
        openCmsWidget('compre-confie')
      }
    }, {
      title: 'Ebit',
      icon: iconEbit,
      short_description: 'Avaliações da loja com Ebit após o checkout',
      clicked () {
        openCmsWidget('ebit')
      }
    }]
  },

  {
    listTitle: i18n({
      pt_br: 'Outros',
      en_us: 'Others'
    }),
    apps: [{
      title: 'a55',
      icon: iconA55,
      short_description: 'Fintech especialista em e-commerce com linhas de crédito para acelerar sua loja',
      clicked () {
        openNewTab('https://plataforma.a55.tech/parceiro/ecomplus')
      }
    }, {
      title: 'ERPs TOTVS',
      icon: null,
      short_description: 'Integração com Protheus e outros ERPs adaptadas sob demanda por parceiros',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('ERPs TOTVS')
      }
    }, {
      title: 'Selia',
      icon: null,
      short_description: 'Integração de estoque e logística feita e adaptada pela Selia',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('a Selia')
      }
    }, {
      title: 'ERP Kuiper',
      icon: null,
      short_description: 'Integração customizada sob demanda por parceiros com o ERP Kuiper',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('ERP Kuiper')
      }
    }, {
      title: 'Hi Platform',
      icon: null,
      short_description: 'Integração pronta e customizada pela própria Hi Platform',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('a Hi Platform')
      }
    }]
  }
]
