
export default {
  name: 'AppMercadoLivreLink',
  components: { },
  data () {
    return {
      productToLink: {}
    }
  },
  methods: {
    add () {
      this.$emit('add', Object.assign({}, this.productToLink))
      this.productToLink = {}
    }
  }
}
