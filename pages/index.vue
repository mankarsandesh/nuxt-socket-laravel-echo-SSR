<template>
  <div class="container"></div>
</template>
<script>
import Echo from 'laravel-echo'
export default {
  data() {
    return {
      liveData: [],
      socketLiveStockInput: {
        channelName: 'BalanceUpdateEvent',
        eventName: 'BalanceUpdateEvent',
      },
      hostname: '<your_hostname>',
      port: 6001,
      Key: '<Secrate_socket_key>',
    }
  },
  created() {
    if (process.client) {
      this.connectUserBalanceSocket()
    }
  },
  mounted() {},
  methods: {
    listenUserBalance({ channelName, eventName }, callback) {
      window.Echo.channel(channelName).listen(eventName, callback)
    },
    connectUserBalanceSocket() {
      this.listenUserBalance(
        {
          channelName: `<Channel_name>`,
          eventName: '<Event_name>',
        },
        ({ data }) => {
          try {
            this.SET_USER_BALANCE(data.data.balance)
            this.userBalance = data.data.balance
          } catch (ex) {
            console.log(ex)
          }
        }
      )
    },
  },
}
</script>
