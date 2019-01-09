<template>
  <div class="scroll" ref="wrapper">
      <div class="bscroll-container">
        <!--这里是具名插槽   可以插入东西-->
          <slot name="scrollContent"></slot>
      </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        scrollX: {
            type: Boolean,
            default: false,
        },
        scrollY: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default() {
              return []
            }
        },
        pullUp: {
            type: Boolean,
            default: false
        },
        distance: {
            type: Number,
            default: 50
        }
    },
    mounted() {
        setTimeout(() => {
            this.initScroll()
        }, 20)
    },
    watch: {
        data() {
            setTimeout(() => {
              this.refresh()
            }, 20)
        },
    },
    methods: {
      initScroll() {
          this.scroll = new BScroll(this.$refs.wrapper, {
              scrollX: this.scrollX,
              scrollY: this.scrollY,
              click: true
          })

        if (this.listenScroll) {
            this.scroll.on('scroll', (pos) => {
                this.$emit('scroll', pos)
            })
        }

        if (this.pullUp) {
            this.scroll.on('scrollEnd', () => {
                if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                    this.$emit('pullUp')
                    console.log(1)
                }
            })
        }

      },
      refresh() {
          this.scroll && this.scroll.refresh()
      }
    }
  }
</script>
<style scoped>
    .scroll {
        height: 300px;
        width: 100%;
        overflow: hidden;
    }
</style>

