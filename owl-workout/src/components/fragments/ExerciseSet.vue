<template>
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
</template>

<script>

export default {
  props: ['setType', 'weightType'],
  data () {
    return {
      options: {
        setTypes: ['Single Exercise', 'Superset'],
        weightTypes: ['Percentage of RM', 'Free Weight Choice']
      },
      set: {
        setType: '',
        description: '',
        weight: 0.5,
        weightType: 'Percentage of RM',
        reps: [2, 2],
        times: 2
      }
    }
  }

}
</script>
