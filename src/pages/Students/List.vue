<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <md-card>
          <md-card-header class="md-centered">
            <md-card-header-text>
              <div class="box">
                <h3 class="pull-left">Students (08)</h3>
                <pagination :pages="15" ></pagination>
              </div>
            </md-card-header-text>

          </md-card-header>
          <md-card-content>
            <md-table v-model="users">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Student Name">
                  <div class="table-items-with-avatar">
                    <div>
                      <md-avatar>
                        <img class="img" :src="item.profileUrl"  />
                      </md-avatar>
                    </div>
                    <label>{{ item.name }}</label>
                  </div>
                </md-table-cell>
                <md-table-cell md-label="ID">{{ item.username }}</md-table-cell>
                <md-table-cell md-label="Teacher">
                  <div class="table-items-with-avatar">
                    <div>
                      <md-avatar>
                        <img class="img" :src="item.teacher.profileUrl"  />
                      </md-avatar>
                    </div>
                    <label>{{ item.teacher.name }}</label>
                  </div>
                </md-table-cell>
                <md-table-cell md-label="">
                  <md-icon class="edit">edit</md-icon>
                  <md-icon class="delete">delete</md-icon>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <student-create></student-create>
      </div>
    </div>
  </div>
</template>

<script>

import StudentCreate from "./Create";

export default {
  name: "StudentList",
  components: {
    StudentCreate,
  },

  props: {
    ProfilePhoto: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    },
  },
  data: function () {
    return {
      users: [
        {
          name: "Lahiru Ramesh",
          profileUrl: require("@/assets/img/faces/marc.jpg"),
          teacher: {
            name: "Teacher 01",
            profileUrl: require("@/assets/img/faces/marc.jpg"),
          },
          username: "S001"
        },

      ]
    }
  },
  methods: {
    myClick(e) {

    }
  }
};
</script>
