<template>
  <div>
    <table class="centered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Item Quantity</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(fruit, index) of orderedArr" :key="fruit.id">
          <td>{{fruit.name}}</td>
          <td>{{fruit.quantity}}</td>
          <td>
            <a
              class="btn-floating btn-large waves-effect waves-light teal darken-1"
              @click="addFruits(index)"
            >
              <i class="material-icons">add</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <a class="waves-effect waves-light btn-large  blue-grey darken-3" @click="reStart()">
      <i class="material-icons left">autorenew</i>Re-Start Counting
    </a>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "List",
  computed: {
    ...mapState(["fruits"]),
    orderedArr() {
      return this.fruits.sort((a, b) => b.quantity - a.quantity);
    }
  },
  methods: {
    ...mapMutations(["addFruits", "reStart"])
  }
};
</script>

