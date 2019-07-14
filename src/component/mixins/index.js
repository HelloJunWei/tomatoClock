import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      new_mission: '',
    }
  },
  computed: {
    ...mapGetters('task', {
      todo_list: 'getTodo',
      done_list: 'getDone'
    }),
    checkTodo () {
      if (!this.todo_list[0]) {
        return '尚無資料'
      }
      return this.todo_list[0].title
    }
  },
  methods: {
    addTodoList () {
      if (!this.new_mission) {
        helper().error('請輸入名稱')
        return false
      }
      this.$store.dispatch('task/addTodo', this.new_mission)
        .then(() => {
          helper()._alert('新增成功!')
          this.new_mission = ''
        })
    },
    delTodo (val, index) {
      if(!val) {
        helper().error('尚無資料')
        return false
      }
      var obj = Object.assign({}, val)
      this.$store.dispatch('task/delTodo', { index, obj })
        .then(() => {
          helper()._alert('已完成')
        })
      
    }
  }
}