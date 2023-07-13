import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import { search, store } from '@ecomplus/client'

export default {
  name: 'InputCategory',

  components: {
    VueBootstrapTypeahead
  },

  props: {
    schema: {
      type: Object,
      default () {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    },
    value: String
  },

  data () {
    return {
      categories: [],
      term: '',
      isSearchScheduled: false,
      selectedCategoryName: ''
    }
  },

  methods: {
    handleHit ({ _id, name }) {
      this.selectedCategoryName = name
      store({
        url: `/categories.json?parent._id=${_id}`
      })
        .then(({ data: { result } }) => {
          if (Array.isArray(result) && result.length) {
            result.forEach(category => {
              if (category._id) {
                this.$emit('input', category._id, category.parent)
              }
            })
          }
        })
        this.$emit('input', _id)
        this.$emit('blur')
    },

    searchCategories (term) {
      store({
        url: `/categories.json?name%=${term}`
      })
        .then(({ data: { result } }) => {
          if (
            this.term === term ||
            (!this.categories.length && this.term.startsWith(term))
          ) {
            this.categories = result.map(({ _id, name, parent }) => {
              return { _id, name, parent }
            })
            if (this.categories.length === 1) {
              this.$refs.typeahead.inputValue = this.categories[0].name
              this.handleHit(this.categories[0])
            }
          }
        })
        .catch(console.error)
    },

    findById (categoryId) {
      store({ url: `/categories/${categoryId}.json` })
        .then(({ data: { _id, name, parent } }) => {
          this.selectedCategoryName = this.term = name
          this.$refs.typeahead.inputValue = `${name} ${parent && parent.name ? `(${parent.name})` : ''}`
          this.categories = [{ _id, name, parent }]
          this.$emit('input', _id)
        })
        .catch(console.error)
    }
  },

  watch: {
    term () {
      if (this.term && this.term.length > 2 && this.term !== this.selectedCategoryName) {
        if (!this.isSearchScheduled) {
          this.isSearchScheduled = true
          this.$nextTick(() => {
            setTimeout(() => {
              this.searchCategories(this.term)
              this.isSearchScheduled = false
            }, 40)
          })
        }
      }
    }
  },

  mounted () {
    if (this.value) {
      this.findById(this.value)
    }
    this.$refs.typeahead.$refs.input.addEventListener('blur', () => {
      if (!this.term) {
        this.$emit('input', '')
        this.$emit('blur')
      } else if (/^[a-f0-9]{24}$/.test(this.term)) {
        this.findById(this.term)
      }
    })
  }
}
