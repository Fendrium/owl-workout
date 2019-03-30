<template>
  <div class="week columns box">
    <div
      class="day column"
      v-for="(day, index) in days"
      v-bind:key="index"
    >
      <div>
        <h2 class="title">Day {{ index+1 }}</h2>
        <a
          class="button is-right is-small"
          @click="isComponentModalActive = true"
        >
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
          <span>Add Exercise</span>
        </a>
        <b-modal
          :active.sync="isComponentModalActive"
          has-modal-card
        >
          <add-exercise @addExercise="onExerciseAdded"></add-exercise>
        </b-modal>
      </div>
      <br>
      <div
        class="box"
        v-for="(exercise, index) in exercises"
        v-bind:key="index"
      >

        <div class="exercise-title">
          <span class="heading">{{ exercise.name }}</span>
        </div>

        <div class="level is-mobile">
          <div
            class="level-item has-text-centered"
            v-for="(set, index2) in exercise.sets"
            v-bind:key="index2"
          >
            <div class="set box">
              <div class="left-wrap">
                <div class="percentage">
                  {{ set.weight * 100 }}%
                </div>

                <div class="reps is-flex-mobile">
                  {{ set.reps.join('+')}}
                </div>

              </div>
              <div class="right-wrap">
                <div class="times">
                  {{ set.times }}
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddExercise from './fragments/AddExercise.vue'

export default {
  components: {
    AddExercise
  },
  name: 'Exercises',
  data () {
    return {
      isComponentModalActive: false,
      days: 7,
      exercises: [
        {
          name: 'Hang SNATCH below + above knee (1RM of SN)',
          type: 'Percentage based',
          sets: [
            {
              weight: 0.5,
              weightType: 'percentage of RM',
              reps: [2, 2],
              times: 2
            },
            {
              weight: 0.6,
              weightType: 'percentage of RM',
              reps: [2, 1],
              times: 2
            },
            {
              weight: 0.65,
              weightType: 'percentage of RM',
              reps: [2, 1],
              times: 2
            },
            {
              weight: 0.7,
              weightType: 'percentage of RM',
              reps: [2, 1],
              times: 4
            }
          ]
        },
        {
          name: 'SNATCH Pull + SNATCH Pull below knees',
          type: 'percentage based',
          sets: [
            {
              weight: 0.7,
              weightType: 'percentage of RM',
              reps: [1, 3],
              times: 2
            },
            {
              weight: 0.8,
              weightType: 'percentage of RM',
              reps: [1, 3],
              times: 2
            }
          ]
        }
      ]

    }
  },
  methods: {
    onExerciseAdded (newValue) {
      this.exercises.push(newValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.exercise-title {
  margin-bottom: 15px;
}

.week {
  margin: 20px;
  overflow: auto;
  white-space: nowrap;
}
.set {
  display: flex !important;
  padding: 3px;
  font-size: 0.85em;
}

.left-wrap {
  padding: 5px;
  float: left;
}

.right-wrap {
  padding: 5px;
  float: right;
  height: 100%px;
}

.percentage {
  border-bottom: 1px solid #000;
}

.times {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
</style>
