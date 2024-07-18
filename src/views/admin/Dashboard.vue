<template>
  <div class="dashboard">
    <div class="dash-content">
      <Topbar pageTitle="Dashboard" />
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Topbar from "@/views/admin/components/Topbar.vue";
export default {
  components: {
    Topbar,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.dashboard {
  background: #fafafa;
  overflow-y: hidden;
  .page-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .dash-content {
    // padding: 0 20px;
    height: fit-content;
    // overflow-y: auto;
    width: 100%;
    .dash-widget-jumbo {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background: #5468ff59;
      height: calc(100vh - 50px);
      padding-top: 10%;
      .jumbo-content {
        width: 100%;
        padding: 20px;
        color: #fff;
        // height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          i {
            font-size: 1rem;
            font-weight: 400;
            display: block;
            margin-bottom: 2rem;
          }
        }
      }
      .houses {
        display: flex;
        padding: 20px;
        gap: 20px;
        .house {
          width: 300px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-radius: 10px;
          transition: 0.3s;
          cursor: pointer;
          @media (max-width: 2000px) {
            width: 250px;
          }
          @media (max-width: 1700px) {
            width: 200px;
          }
          @media (max-width: 1500px) {
            width: 180px;
          }
          @media (max-width: 1300px) {
            width: 160px;
          }
          @media (max-width: 900px) {
            width: 140px;
          }
          &:hover {
            background-color: #edeffd;
          }
          .house-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: $primary_color;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 1.5rem;
              color: #fff;
            }
          }
          .house-info {
            display: flex;
            flex-direction: column;
            .house-name {
              font-size: 1rem;
              font-weight: 600;
              display: flex;
              flex-direction: column;
              align-items: center;
              @media (max-width: 1700px) {
                font-size: 0.9rem;
              }
              @media (max-width: 1500px) {
                font-size: 0.8rem;
              }
              @media (max-width: 1300px) {
                font-size: 0.7rem;
              }
              @media (max-width: 900px) {
                font-size: 0.6rem;
              }
              span {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
              small {
                font-size: 0.8rem;
                color: #888;
                font-weight: 400;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                @media (max-width: 1700px) {
                  font-size: 0.7rem;
                }
                @media (max-width: 1500px) {
                  font-size: 0.6rem;
                }
                @media (max-width: 1300px) {
                  font-size: 0.5rem;
                }
                @media (max-width: 900px) {
                  font-size: 0.45rem;
                }
              }
            }
          }
        }
        .add-house-btn {
          width: 300px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-radius: 10px;
          transition: 0.3s;
          cursor: pointer;
          &:hover {
            background-color: #edeffd;
          }
          @media (max-width: 2000px) {
            width: 250px;
          }
          @media (max-width: 1700px) {
            width: 200px;
          }
          @media (max-width: 1500px) {
            width: 180px;
          }
          @media (max-width: 1300px) {
            width: 160px;
          }
          @media (max-width: 900px) {
            width: 140px;
          }
          i {
            font-size: 2rem;
            color: $primary_color;
          }
        }
      }
    }
  }
}
</style>