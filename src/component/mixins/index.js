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
    })
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
    }
  }
}