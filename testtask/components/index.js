export const FormSubmission = () => import('../..\\components\\form_submission.vue' /* webpackChunkName: "components/form-submission" */).then(c => wrapFunctional(c.default || c))
export const Products = () => import('../..\\components\\products.vue' /* webpackChunkName: "components/products" */).then(c => wrapFunctional(c.default || c))
export const Sorting = () => import('../..\\components\\sorting.vue' /* webpackChunkName: "components/sorting" */).then(c => wrapFunctional(c.default || c))
export const SvgBasket = () => import('../..\\components\\svg\\basket.vue' /* webpackChunkName: "components/svg-basket" */).then(c => wrapFunctional(c.default || c))
export const SvgPoint = () => import('../..\\components\\svg\\point.vue' /* webpackChunkName: "components/svg-point" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
