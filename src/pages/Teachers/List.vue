<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <md-card>
          <md-card-header>
            <md-card-header-text>
              Teachers (08)
            </md-card-header-text>

          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import {  UserCard } from "@/pages";
import { SimpleTable } from '@/components';

export default {
  name: "TeacherList",
  components: {
    UserCard,
    SimpleTable
  }
};
</script>
