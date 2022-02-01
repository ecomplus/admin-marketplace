import { i18n } from '@ecomplus/utils'
import { fetchStore } from '@ecomplus/auth'
import iconAnalytics from './../assets/apps-icons/analytics.png'
import iconCompreeconfie from './../assets/apps-icons/compre-confie.png'
import iconEbit from './../assets/apps-icons/ebit.png'
import iconFbPixel from './../assets/apps-icons/fb-pixel.png'
import iconGmcRating from './../assets/apps-icons/gmc-ratings.png'
import iconTagManager from './../assets/apps-icons/tag-manager.png'
import iconTawkto from './../assets/apps-icons/tawkto.png'

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
      icon: iconFbPixel,
      short_description: 'Disparo de eventos de visualização, carrinho e checkout via FB Pixel',
      clicked () {
        openCmsWidget('fb-pixel')
      }
    }, {
      title: 'Google Tag Manager',
      icon: iconTagManager,
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
  }
]
