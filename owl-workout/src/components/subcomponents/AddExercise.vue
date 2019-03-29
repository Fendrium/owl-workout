<template>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Add Exercise</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Exercise Name">
                    <b-input
                        type="text"
                        v-model="exercise.name"
                        placeholder="Exercise name"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Description">
                    <b-input
                        type="text"
                        v-model="exercise.description"
                        placeholder="Description"
                        required>
                    </b-input>
                </b-field>

            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary" @click='addExercise()'>Add</button>
            </footer>
        </div>
    </form>
</template>

<script>

export default {
  data () {
    return {
      exercise: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    addExercise () {
      if (this.exercise.name !== '') {
        console.log('Launched')
        this.$emit('addExercise', this.exercise)
        this.$parent.close()
      }
    }

  }
}
</script>
