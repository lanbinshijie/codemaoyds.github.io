<template>
    
</template>
<script>
export default {
    watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.routerParms.list=to.query.list
      this.reload()
    },
}
}
</script>