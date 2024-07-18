<template>
  <div class="Sidebar">
    <div class="sidebar-header">
      <img
        :src="$img('nmwlogow.png')"
        alt="K-Realty Logo"
        @error="$imageurlalt()"
      />
    </div>
    <ul class="nav-links">
      <!-- dashboard -->
      <li>
        <router-link
          :to="{ name: 'AdminDashboard' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/dashboard') }"
        >
          <i class="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <!-- rooms -->
      <li>
        <router-link
          :to="{ name: 'AdminMerchants' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/merchants') }"
        >
          <i class="fa-brands fa-product-hunt"></i>
          <span>Merchants</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'AdminCollections' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/collections') }"
        >
          <i class="fa-solid fa-layer-group"></i>
          <span>Collections</span>
        </router-link>
      </li>
      <!-- activities -->
      <li>
        <router-link
          :to="{ name: 'AdminDashboard' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/rooms') }"
        >
          <i class="fa-solid fa-clipboard-list"></i>
          <span>Activities/Missions</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'AdminDashboard' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/rooms') }"
        >
          <i class="fa-solid fa-users"></i>
          <span>Volunteers</span>
        </router-link>
      </li>
      <!-- Warehouses -->
      <li>
        <router-link
          :to="{ name: 'AdminDashboard' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/rooms') }"
        >
          <i class="fa-solid fa-warehouse"></i>
          <span>Warehouses</span>
        </router-link>
      </li>
      <!-- Stock -->
      <li>
        <router-link
          :to="{ name: 'AdminDashboard' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/rooms') }"
        >
          <i class="fa-solid fa-box"></i>
          <span>Stock</span>
        </router-link>
      </li>
      <!-- tenants -->
      <li>
        <div
          :to="{ name: 'AdminDashboard' }"
          class="nav-link nav-link-with-sublinks"
          :class="{ active: $urlContains('admin/tenants') }"
          @click="toggleSubLinks('tenants')"
        >
          <div>
            <i class="fa-solid fa-cog"></i>
            <span>Settings</span>
          </div>
          <i
            class="fa-solid fa-chevron-down"
            :class="activePage == 'tenants' ? 'active' : ''"
          ></i>
        </div>
        <ul class="sub-links" :class="activePage == 'tenants' ? 'active' : ''">
          <li>
            <router-link
              :to="{ name: 'AdminDashboard' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/tenants/all') }"
            >
              <span>Admins</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminDashboard' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/tenants/all') }"
            >
              <span>Languages</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminDashboard' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/tenants/add') }"
            >
              <span>Site Settings</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      userRole: "",
      activePage: "",
    };
  },
  methods: {
    toggleSubLinks(id) {
      if (this.activePage == id) {
        this.activePage = "";
      } else {
        this.activePage = id;
      }
    },
  },
  mounted() {
    if (this.$urlContains("admin/merchants")) {
      this.activePage = "merchants";
    }
    if (this.$urlContains("admin/collections")) {
      this.activePage = "collections";
    }
  },
  watch: {
    $route(to, from) {
      this.activePage = null;
      if (this.$urlContains("admin/merchants")) {
        this.activePage = "merchants";
      }
      if (this.$urlContains("admin/collections")) {
        this.activePage = "collections";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
* {
  transition: all 0.5s ease-in-out;
}
.Sidebar {
  width: 100%;
  height: 100vh;
  background-color: white;
  border-right: 1px solid white;
  border-right: 1px solid var(--neutral-gray-gray-50, #e5e8ee);
  box-shadow: 4px 0px 30px 0px rgba(131, 98, 234, 0.05);
  overflow-y: hidden;
  .sidebar-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $primary_color;
    flex-wrap: wrap;
    padding: 1rem 0;
    img {
      width: 50%;
      max-width: 100px;
      display: block;
    }
  }
  .nav-links {
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: $secondary_color;
    overflow: auto;
    padding-bottom: 2rem;
    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      .nav-link {
        font-weight: 400;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.6rem 1rem;
        padding-left: 1rem;
        height: 45px;
        font-weight: 400;
        cursor: pointer;
        span,
        i {
          font-size: 0.8rem;
          color: #ffffff8e;
          text-transform: capitalize;
        }
        i {
          margin-right: 0.5rem;
        }
        &:hover,
        &.active {
          background-color: darken($secondary_color, 4%);
          span,
          i {
            color: #fff;
          }
        }
        &.nav-link-with-sublinks {
          display: flex;
          justify-content: space-between;
          &.active {
            span,
            i {
              color: #fff;
            }
          }
        }
        .fa-chevron-down {
          font-size: 0.8rem;
          color: #ffffff8e;
          transition: all 0.3s ease-in-out;
          &.active {
            transform: rotate(180deg);
          }
        }
      }
      .sub-links {
        width: 100%;
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease-in-out;
        background-color: darken($secondary_color, 3%);
        &.active {
          height: 100%;
          li {
            .nav-link {
              padding-left: 2rem;
              color: #fff;
              border-left: 4px solid transparent;
              span {
                font-weight: 400;
                font-size: 0.8rem;
                color: #ffffff8e;
              }
              &:hover,
              &.active {
                background: darken($secondary_color, 7%);
                span {
                  color: $primary_color;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>