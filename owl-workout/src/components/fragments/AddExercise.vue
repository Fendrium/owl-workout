<template>
    <form action="">
        <div class="modal-card" style="width: 500px">
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

                <b-field label="Set Type">
                    <b-select required placeholder="Select a type of set">
                        <option
                            v-for="setType in options.setTypes"
                            :value="setType"
                            :key="setType">
                            {{ setType }}
                        </option>
                    </b-select>
                </b-field>

                <b-field label="Weight Type">
                    <b-select required placeholder="Select a type of exercise">
                        <option
                            v-for="weightType in options.weightTypes"
                            :value="weightType"
                            :key="weightType">
                            {{ weightType }}
                        </option>
                    </b-select>
                </b-field>

                <b-field label="Weight Type">
                    <exercise-set></exercise-set>
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
      options: {
        setTypes: ['Single Exercise', 'Superset'],
        weightTypes: ['Percentage of RM', 'Free Weight Choice']
      },
      setNumber: 0,
      exercise: {
        name: '',
        description: '',
        setType: '',
        weightType: '',
        sets: []
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
