<template>
  <div>aaa</div>
</template>

<script>
export default {
  sockets: {
    // 通过vue实例对象sockets实现组件中的事件监听
    connect(data) {
      // socket的connect事件
      console.log(data + "11111111111111");
      console.log("socket connected from Page");
    },
    STREAM_STATUS(data) {
      // 后端按主题名推送的消息数据
      console.log(data + "222222222222");
      console.log("Page：" + data);
    },
    users(data) {
      //监听连接数量
      console.log("在线人数", data);
    },
    receive_message(data) {
      //后台推送数据
      console.log("接收数据", data);
    },
    reconnect(data) {
      console.log("重新连接", data);
    },
    disconnect(data) {
      // 检测断开，然后重新连接
      console.log(data);
      console.log("已经断开连接");
      console.log("是否重新连接", this.$socket.connected);
      // this.$socket.emit('reconnect',{'reconnect:'})
    },
    transfeiMessage(data) {
      // 接受后台传过来的消息
      console.log("后台传过来的信息", data);
    }
  },
  mounted() {
    console.log("page mounted");
    this.$socket.emit("STREAM_STATUS", { subscribe: true }); // 在页面加载时发起订阅，“STREAM_STATUS”是你跟后端约定好的主题名
  }
};
</script>

<style>
</style>