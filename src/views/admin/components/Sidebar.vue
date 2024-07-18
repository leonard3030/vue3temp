<template>
  <div class="Sidebar">
    <div class="sidebar-header">
      <img
        :src="$img('logow.png')"
        alt="K-Realty Logo"
        @error="$imageurlalt()"
      />
    </div>
    <ul class="nav-links">
      <!-- dashboard -->
      <li>
        <router-link
          :to="{ name: 'AdminAnalytics' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/analytics') }"
        >
          <i class="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <!-- rooms -->
      <li>
        <router-link
          :to="{ name: 'AdminRooms' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/rooms') }"
        >
          <i class="fa-solid fa-door-open"></i>
          <span>Units / Rooms</span>
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
            <i class="fa-solid fa-person-shelter"></i>
            <span>Tenant Details</span>
          </div>
          <i
            class="fa-solid fa-chevron-down"
            :class="activePage == 'tenants' ? 'active' : ''"
          ></i>
        </div>
        <ul class="sub-links" :class="activePage == 'tenants' ? 'active' : ''">
          <li>
            <router-link
              :to="{ name: 'AdminTenants' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/tenants/all') }"
            >
              <span>Tenants</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminAddTenants' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/tenants/add') }"
            >
              <span>Add Tenant</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- payments -->
      <li>
        <div
          class="nav-link nav-link-with-sublinks"
          :class="{ active: $urlContains('admin/payments') }"
          @click="toggleSubLinks('payments')"
        >
          <div>
            <i class="fa-solid fa-money-bill-wave"></i>
            <span>Payments</span>
          </div>
          <i
            class="fa-solid fa-chevron-down"
            :class="activePage == 'payments' ? 'active' : ''"
          ></i>
        </div>
        <ul class="sub-links" :class="activePage == 'payments' ? 'active' : ''">
          <li>
            <router-link
              :to="{ name: 'AdminPayments' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/payments/history') }"
            >
              <span>Payment History</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminUnpaidInvoices' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/payments/unpaid') }"
            >
              <span>Unpaid Invoices</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- Requests(Booking Requests, Subscription Canceling Requests) -->
      <li>
        <div
          class="nav-link nav-link-with-sublinks"
          :class="{ active: $urlContains('admin/requests') }"
          @click="toggleSubLinks('requests')"
        >
          <div>
            <i class="fa-solid fa-envelope"></i>
            <span>Requests</span>
          </div>
          <i
            class="fa-solid fa-chevron-down"
            :class="activePage == 'requests' ? 'active' : ''"
          ></i>
        </div>
        <ul class="sub-links" :class="activePage == 'requests' ? 'active' : ''">
          <li>
            <router-link
              :to="{ name: 'AdminBookingRequests' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/requests/booking') }"
            >
              <span>Booking Requests</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminCancellationRequests' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/requests/cancellation') }"
            >
              <span>Subscription Canceling</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- complaints -->
      <li>
        <router-link
          :to="{ name: 'AdminDashboard' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/complaints') }"
        >
          <i class="fa-regular fa-list-alt"></i>
          <span>Complaints</span>
        </router-link>
      </li>
      <!-- messages -->
      <li>
        <router-link
          :to="{ name: 'AdminDashboard' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/messages') }"
        >
          <i class="fa-solid fa-comment-alt"></i>
          <span>Messages</span>
        </router-link>
      </li>
      <!-- files -->
      <li>
        <router-link
          :to="{ name: 'AdminFiles' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/files-management') }"
        >
          <i class="fa-solid fa-file"></i>
          <span>files management</span>
        </router-link>
      </li>
      <!-- employees -->
      <li>
        <div
          :to="{ name: 'AdminEmployees' }"
          class="nav-link nav-link-with-sublinks"
          :class="{ active: $urlContains('admin/employees') }"
          @click="toggleSubLinks('employees')"
        >
          <div>
            <i class="fa-solid fa-user-tie"></i>
            <span>Employees</span>
          </div>
          <i
            class="fa-solid fa-chevron-down"
            :class="activePage == 'employees' ? 'active' : ''"
          ></i>
        </div>
        <ul
          class="sub-links"
          :class="activePage == 'employees' ? 'active' : ''"
        >
          <li>
            <router-link
              :to="{ name: 'AdminEmployees' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/employees/all') }"
            >
              <span>All Employees</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminAddEmployee' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/employees/add') }"
            >
              <span>Add Employee</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- users -->
      <!-- <li>
        <router-link
          :to="{ name: 'AdminDashboard' }"
          class="nav-link"
          :class="{ active: $urlContains('admin/users') }"
        >
          <i class="fa fa-users"></i>
          <span>System Users</span>
        </router-link>
      </li> -->
      <!-- config -->
      <li>
        <div
          :to="{ name: 'AdminDashboard' }"
          class="nav-link nav-link-with-sublinks"
          :class="{ active: $urlContains('admin/configurations') }"
          @click="toggleSubLinks('configurations')"
        >
          <div>
            <i class="fa-regular fa-building"></i>
            <span>Configurations</span>
          </div>
          <i
            class="fa-solid fa-chevron-down"
            :class="activePage == 'configurations' ? 'active' : ''"
          ></i>
        </div>
        <ul
          class="sub-links"
          :class="activePage == 'configurations' ? 'active' : ''"
        >
          <li>
            <router-link
              :to="{ name: 'AdminDashboard' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/configurations/info') }"
            >
              <span>General Info</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminWings' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/configurations/wings') }"
            >
              <span>Wings</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminFloors' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/configurations/floors') }"
            >
              <span>Floors</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminRoomClasses' }"
              class="nav-link"
              :class="{
                active: $urlContains('admin/configurations/room-classes'),
              }"
            >
              <span>Room Classes</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- Archive -->
      <li>
        <div
          :to="{ name: 'AdminDashboard' }"
          class="nav-link nav-link-with-sublinks"
          :class="{ active: $urlContains('admin/archive') }"
          @click="toggleSubLinks('archive')"
        >
          <div>
            <i class="fa-solid fa-archive"></i>
            <span>Archive</span>
          </div>
          <i
            class="fa-solid fa-chevron-down"
            :class="activePage == 'archive' ? 'active' : ''"
          ></i>
        </div>
        <ul class="sub-links" :class="activePage == 'archive' ? 'active' : ''">
          <li>
            <router-link
              :to="{ name: 'AdminDashboard' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/archive/tenants') }"
            >
              <span>archived tenants</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'AdminDashboard' }"
              class="nav-link"
              :class="{ active: $urlContains('admin/archive/docs') }"
            >
              <span>Archived docs</span>
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
    if (this.$urlContains("admin/properties")) {
      this.activePage = "properties";
    }
    if (this.$urlContains("admin/tenants")) {
      this.activePage = "tenants";
    }
    if (this.$urlContains("admin/payments")) {
      this.activePage = "payments";
    }
    if (this.$urlContains("admin/requests")) {
      this.activePage = "requests";
    }
    if (this.$urlContains("admin/configurations")) {
      this.activePage = "configurations";
    }
    if (this.$urlContains("admin/employees")) {
      this.activePage = "employees";
    }
    if (this.$urlContains("admin/archive")) {
      this.activePage = "archive";
    }
  },
  watch: {
    $route(to, from) {
      this.activePage = null;
      if (this.$urlContains("admin/properties")) {
        this.activePage = "properties";
      }
      if (this.$urlContains("admin/tenants")) {
        this.activePage = "tenants";
      }
      if (this.$urlContains("admin/payments")) {
        this.activePage = "payments";
      }
      if (this.$urlContains("admin/requests")) {
        this.activePage = "requests";
      }
      if (this.$urlContains("admin/configurations")) {
        this.activePage = "configurations";
      }
      if (this.$urlContains("admin/employees")) {
        this.activePage = "employees";
      }
      if (this.$urlContains("admin/archive")) {
        this.activePage = "archive";
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
            color: $primary_color;
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
              color: $primary_color;
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