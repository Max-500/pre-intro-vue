<template>
  <div>
    <h2>Register Form</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Name: </label>
        <Field type="text" id="name" name="name" placeholder="Enter your name"/>
        <ErrorMessage name="name" />
      </div>
      <div class="form">
        <label for="email">Email: </label>
        <Field type="email" id="email" name="email" placeholder="Enter your email" />
        <ErrorMessage name="email"/>
      </div>
      <div class="form">
        <button type="submit">Register</button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';

const onSubmit  = () => {
  console.log('Somebody push me!');
}
</script>

<style scoped>
.form {
  margin-bottom: 15px;
}
</style>
