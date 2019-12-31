<template>
  <section class="layout">
    <div class="container">
      <b-navbar class="has-margin-bottom-50">
        <template slot="start">
          <b-navbar-item tag="g-link" to="/">
            <strong>Home</strong>
          </b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item
            tag="g-link"
            to="https://www.linkedin.com/in/soufiane-benzaoui/"
          >LinkedIn Profile</b-navbar-item>
          <b-navbar-item tag="g-link" to="/about/">About</b-navbar-item>
        </template>
      </b-navbar>
      <slot />
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
} */

/* .layout {
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
} */
/* 
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
