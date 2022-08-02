import { i18n } from '@ecomplus/utils'
import ecomAuth from '@ecomplus/auth'
import iconAnalytics from './../assets/apps-icons/analytics.png'
import iconCompreeconfie from './../assets/apps-icons/compre-confie.png'
import iconEbit from './../assets/apps-icons/ebit.png'
import iconFbPixel from './../assets/apps-icons/fb-pixel.png'
import iconGmcRating from './../assets/apps-icons/gmc-ratings.png'
import iconTagManager from './../assets/apps-icons/tag-manager.png'
import iconTawkto from './../assets/apps-icons/tawkto.png'
import iconA55 from './../assets/apps-icons/a55.png'
import iconPerformaai from './../assets/apps-icons/performaai.png'
import iconProtheus from './../assets/apps-icons/protheus.png'
import iconRastreionet from './../assets/apps-icons/rastreionet.png'
import iconSelia from './../assets/apps-icons/selia.png'
import iconKuiper from './../assets/apps-icons/kuiper.png'
import iconHiplatform from './../assets/apps-icons/hiplatform.png'
import iconSak from './../assets/apps-icons/sak.png'

const openNewTab = url => window.open(url, '_blank').focus()

const openCmsWidget = slug => {
  ecomAuth.fetchStore()
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
    },
    {
      title: 'Sak',
      icon: iconSak,
      short_description: 'O Sak é um aplicativo de automação de envios de mensagem exclusivo, a recuperação de carrinhos abandonados e pedidos não pagos.',
      paid: 'Cadastrar',
      clicked () {
        openNewTab('https://get.sak.com.br/')
      }
    },
    {
      title: 'Rastreio.net',
      icon: iconRastreionet,
      short_description: 'O Rastreio.net é um aplicativo que facilita o processo de espera do cliente que aguarda seu pedido possibilitando o rastreio.',
      paid: 'Cadastrar',
      clicked () {
        openNewTab('https://get.rastreio.net/')
      }
    },
    {
      title: 'ERPs TOTVS',
      icon: iconProtheus,
      short_description: 'Integração com Protheus e outros ERPs adaptadas sob demanda por parceiros',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('ERPs TOTVS')
      }
    },
    {
      title: 'Selia',
      icon: iconSelia,
      short_description: 'Integração de estoque e logística feita e adaptada pela Selia',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('a Selia')
      }
    },
    {
      title: 'ERP Kuiper',
      icon: iconKuiper,
      short_description: 'Integração customizada sob demanda por parceiros com o ERP Kuiper',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('ERP Kuiper')
      }
    },
    {
      title: 'ERP Sig 2000',
      icon: null,
      short_description: 'Integração pronta ou customizada sob demanda por parceiros com o ERP Sig 2000',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('ERP Sig 2000')
      }
    },
    {
      title: 'Hi Platform',
      icon: iconHiplatform,
      short_description: 'Integração pronta e customizada pela própria Hi Platform',
      paid: 'Entre em contato',
      clicked () {
        openWhatsapp('a Hi Platform')
      }
    },
    {
      title: 'Performa.ai',
      icon: iconPerformaai,
      short_description: 'Integração pronta e customizada pela própria Performa.ai, que oferece carrinho abandonado automatizado, vitrines inteligentes e outras funcionalidades.',
      paid: 'Entre em contato',
      clicked () {
        openNewTab('https://performaai.d.pr/ACG4LO')
      }
    }]
  }
]
