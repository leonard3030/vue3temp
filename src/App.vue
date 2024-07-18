<template>
  <miLoader v-if="$store.state.startLoader" />
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
}
a {
  text-decoration: none;
  color: #000;
}

@import "@/assets/main.scss";
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
.d-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mt-10 {
  margin-top: 10px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-30 {
  margin-top: 30px;
}
.mt-40 {
  margin-top: 40px;
}
.mt-50 {
  margin-top: 50px;
}
.mt-60 {
  margin-top: 60px;
}
.mt-70 {
  margin-top: 70px;
}
.mt-80 {
  margin-top: 80px;
}
.mt-90 {
  margin-top: 90px;
}
.mt-100 {
  margin-top: 100px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mb-20 {
  margin-bottom: 20px;
}
.mb-30 {
  margin-bottom: 30px;
}
.mb-40 {
  margin-bottom: 40px;
}
.mb-50 {
  margin-bottom: 50px;
}
.mb-60 {
  margin-bottom: 60px;
}
.mb-70 {
  margin-bottom: 70px;
}
.mb-80 {
  margin-bottom: 80px;
}
.mb-90 {
  margin-bottom: 90px;
}
.mb-100 {
  margin-bottom: 100px;
}
.pt-10 {
  padding-top: 10px;
}
.pt-20 {
  padding-top: 20px;
}
.pt-30 {
  padding-top: 30px;
}
.pt-40 {
  padding-top: 40px;
}
.pt-50 {
  padding-top: 50px;
}
.pt-60 {
  padding-top: 60px;
}
.pt-70 {
  padding-top: 70px;
}
.pt-80 {
  padding-top: 80px;
}
.pt-90 {
  padding-top: 90px;
}
.pt-100 {
  padding-top: 100px;
}
.pb-10 {
  padding-bottom: 10px;
}
.pb-20 {
  padding-bottom: 20px;
}
.pb-30 {
  padding-bottom: 30px;
}
.pb-40 {
  padding-bottom: 40px;
}
.pb-50 {
  padding-bottom: 50px;
}
.pb-60 {
  padding-bottom: 60px;
}
.pb-70 {
  padding-bottom: 70px;
}
.pb-80 {
  padding-bottom: 80px;
}
.pb-90 {
  padding-bottom: 90px;
}
.pb-100 {
  padding-bottom: 100px;
}
.bp {
  background: $primary_color;
}
.cp {
  color: $primary_color;
}
.bw {
  background: #fff;
}
.cw {
  color: #fff;
}
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  i {
    margin-left: 5px;
  }
  &:hover {
    // transform: scale(1.1);
  }
}
.input-group {
  gap: 20px;
}
.group-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.group-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
.group-4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}
.group-5 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.my-btn {
  background: $primary_color;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  &.wd {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  &.glow {
    box-shadow: 0px 0px 15px 0px #1d21887e;
  }
  &:hover {
    background: darken($color: $primary_color, $amount: 10%);
  }
  &.bw {
    background: #fff;
    color: $primary_color;
    &:hover {
      background: #f0f0f0;
    }
  }
  &.round {
    border-radius: 50px !important;
  }
}

.container {
  padding: 0 15rem;
  @media (max-width: 1700px) {
    padding: 0 10rem;
  }
  @media (max-width: 1500px) {
    padding: 0 8rem;
  }
  @media (max-width: 1200px) {
    padding: 0 5rem;
  }
  @media (max-width: 1000px) {
    padding: 0 3rem;
  }
  @media (max-width: 750px) {
    padding: 0 2rem;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
  button {
    background: none;
    border: none;
    label {
      padding: 5px 15px;
      border: 1px solid #e4e1e1;
      border-radius: 5px;
      margin: 0 10px;
      transition: all 0.3s;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        background-color: $primary_color;
        color: #fff;
      }
      &.disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      &.active {
        background-color: $primary_color;
        color: #fff;
      }
    }
  }
}
.form-group {
  .form-control {
    padding: 10px 5px;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    margin-bottom: 20px;
    outline: none;
    font-size: 0.8rem;
  }
  label {
    font-size: 0.8rem;
    margin-bottom: 10px;
    display: inline-block;
  }
}
.info {
  background: $secondary_color;
  color: #fff;
}
.my-table {
  table {
    width: 100%;
    border-collapse: collapse;
    thead {
      th {
        text-align: left;
        padding: 0.51rem 0.5rem;
        font-weight: 600;
        border-bottom: 1px solid #e5e8ee;
        font-size: 0.7rem;
        color: $secondary_color;
        text-transform: uppercase;
        @media (max-width: 1500px) {
          font-size: 0.6rem;
        }
        @media (max-width: 1200px) {
          font-size: 0.5rem;
        }
      }
      background: #cfcedd;
    }
    tbody {
      tr {
        td {
          padding: 7px;
          border-bottom: 1px solid #e5e8ee;
          font-size: 0.9rem;
          @media (max-width: 1500px) {
            font-size: 0.8rem;
          }
          @media (max-width: 1200px) {
            font-size: 0.7rem;
          }
          img {
            width: 50px;
            height: 50px;
            object-fit: contain;
            border-radius: 5px;
          }
          button {
            margin-right: 10px;
            padding: 0.3rem 1rem;
            border-radius: 50px;
            &.edit {
              background-color: $primary_color;
              color: white;
              &:hover {
                background-color: $secondary_color;
              }
            }
            &.delete {
              background-color: #a82929;
              color: white;
              &:hover {
                background-color: #7a1f1f;
              }
            }
            &.default {
              background-color: $primary_color;
              color: white;
              &:hover {
                background-color: $secondary_color;
              }
            }
          }
          span.active,
          span.Active {
            color: white;
            background-color: green;
            padding: 0.1rem 0.5rem;
            border-radius: 50px;
            font-size: 0.6rem;
          }
          span.pending,
          span.Pending {
            color: white;
            background-color: #e08a00;
            padding: 0.1rem 0.5rem;
            border-radius: 50px;
            font-size: 0.6rem;
          }
        }
      }
    }
  }
}
.flex-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    margin-right: 10px;
  }
}

.cancel {
  background-color: #a82929;
  color: white;
  &:hover {
    background-color: #7a1f1f;
  }
}

.page-title {
  span {
    font-size: 1.8rem;
    color: $secondary_color;
    font-weight: 400;
    small {
      font-size: 0.8rem;
      color: #000;
      font-weight: 300;
    }
  }
}
.group-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.files {
  padding: 0 2rem;
  &.list {
    .files-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      text-align: left;
      padding: 0.51rem 0.5rem;
      font-weight: 600;
      border-bottom: 1px solid #e5e8ee;
      font-size: 0.7rem;
      color: $secondary_color;
      text-transform: uppercase;
      span {
        text-align: left;
      }
    }
    .files-body {
      .file {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        padding: 8px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.034);
        cursor: pointer;
        &:hover {
          background-color: #e5e8ee;
          span {
            color: $secondary_color;
            font-weight: 600;
          }
        }
        span {
          text-align: left;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
        }
        img {
          height: 20px;
          width: 20px;
          object-fit: contain;
          margin-right: 0.5rem;
        }
      }
    }
  }
  &.grid {
    .files-body {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      .file {
        padding: 1rem;
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        &:hover {
          box-shadow: 0 0 5px #2d274933;
          background: #efedf5;
          cursor: pointer;
        }
        span {
          display: block;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
          color: $secondary_color;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          label {
            margin-top: 0.5rem;
          }
          &.smalls {
            display: none;
          }
        }
        img {
          height: 50px;
          width: 50px;
          object-fit: contain;
          margin: 0 auto;
        }
      }
    }
    .files-header {
      display: none;
    }
    .search-section {
      margin-bottom: 2rem;
    }
  }
  label {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;
  }

  .search-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      padding: 0.3rem 0.5rem;
      border-bottom: 1px solid #e5e8ee;
      margin-right: 1rem;
      width: 300px;
      background: white;
      font-size: 0.9rem;
    }
    .displayModel {
      button {
        padding: 0.5rem 1rem;
        border: 1px solid #e5e8ee;
        border-radius: 5px;
        margin-right: 1rem;
        background-color: white;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: #e5e8ee;
        }
        &.active {
          background-color: $primary_color;
          color: white;
        }
      }
    }
  }
}
.form-btns {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    &.cancel {
      background-color: #a82929;
      color: white;
      &:hover {
        background-color: #7a1f1f;
      }
    }
    &.save {
      background-color: $primary_color;
      color: white;
      &:hover {
        background-color: $secondary_color;
      }
    }
  }
}

.admin-forms {
  padding: 2rem 0;
  border-radius: 5px;
  .input-group {
    margin-bottom: 1rem;
    .form-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      input,
      select,
      textarea,
      .my-multiselect {
        width: 100%;
        padding: 0.9rem;
        border-radius: 5px;
        border: none;
        margin-bottom: 1rem;
        background: #fff;
        outline: none;
        font-size: 13px;
        color: #686868;
        border: 1px solid #e5e5e5;
      }
    }
  }
  button {
    padding: 0.75rem 1rem;
    background-color: $primary_color;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    margin-top: 2rem;
    &:hover {
      background-color: $secondary_color;
    }
  }
}

.page-title {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 0.5rem 1rem;
    background-color: $primary_color;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    &:hover {
      background-color: $secondary_color;
    }
  }
}

.dflex {
  display: flex;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.flex-start {
  display: flex;
  justify-content: flex-start;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
.flex-wrap-reverse {
  display: flex;
  flex-wrap: wrap-reverse;
}
.flex-column-reverse {
  display: flex;
  flex-direction: column-reverse;
}
.flex-row-reverse {
  display: flex;
  flex-direction: row-reverse;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-evenly {
  justify-content: space-evenly;
}
.align-center {
  align-items: center;
}
.align-start {
  align-items: flex-start;
}
.align-end {
  align-items: flex-end;
}
.align-baseline {
  align-items: baseline;
}
.align-stretch {
  align-items: stretch;
}
.align-content-center {
  align-content: center;
}
.align-content-start {
  align-content: flex-start;
}
.align-content-end {
  align-content: flex-end;
}
.align-content-between {
  align-content: space-between;
}
.align-content-around {
  align-content: space-around;
}
.align-content-stretch {
  align-content: stretch;
}
.self-auto {
  align-self: auto;
}
.self-start {
  align-self: flex-start;
}
.self-end {
  align-self: flex-end;
}
.self-center {
  align-self: center;
}
.self-baseline {
  align-self: baseline;
}
.chip {
  padding: 5px 10px;
  border-radius: 50px;
  background-color: #f0f0f0;
  color: #000;
  font-size: 0.8rem;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
}
.chip-primary {
  background-color: $primary_color;
  color: #fff;
}
.chip-secondary {
  background-color: $secondary_color;
  color: #fff;
}
.chip-danger {
  background-color: #a82929;
  color: #fff;
}
.chip-warning {
  background-color: #e08a00;
  color: #fff;
}
.chip-success {
  background-color: green;
  color: #fff;
}
.chip-info {
  background-color: #007bff;
  color: #fff;
}
.chip-light {
  background-color: #f8f9fa;
  color: #000;
}
.chip-dark {
  background-color: #343a40;
  color: #fff;
}
.chip-round {
  border-radius: 50px;
}

table {
  margin-top: 2rem;
}
.table-filters {
  display: flex;
  justify-content: flex-start;
  column-gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  fieldset {
    width: 200px;
    border-radius: 5px;
    border: 1px solid #ccc;
    legend {
      font-size: 0.7rem;
      font-weight: bold;
      margin: 0 10px;
      color: #666;
      font-weight: 400;
      padding: 0 10px;
    }
    .form-group {
      padding: 0 !important;
      margin: 0 !important;
      select,
      input {
        width: 100%;
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
        margin-bottom: 0;
        font-size: 0.75rem;
      }
    }
  }
  button {
    height: 50px;
    width: 150px;
    display: inline-block;
    background-color: $primary_color;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    &:hover {
      background-color: $secondary_color;
    }
  }
}
.my-table {
  margin: 2rem 1rem;
}
</style>
