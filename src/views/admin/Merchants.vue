<template>
  <div class="dashboard">
    <div class="dash-content">
      <Topbar pageTitle="Merchants" />
      <div class="my-table">
        <div class="table-header flex-btn">
          <form class="table-filters">
            <fieldset>
              <legend>Search</legend>
              <div class="form-group">
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Search"
                  v-model="searchQuery.search"
                />
              </div>
            </fieldset>
            <!-- Filter -->
            <div class="form-group">
              <button
                class="my-btn cw wd glow"
                type="submit"
                @click.prevent="getItems()"
              >
                Filter
              </button>
            </div>
          </form>
          <button class="my-btn cw wd glow" @click="startAdd = true">
            Add Merchant
          </button>
        </div>
        <table v-if="allData.length > 0">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Owner</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in allData" :key="item.id">
              <td>
                {{ index + 1 }}
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.owner }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.address }}</td>
              <td>
                <button
                  @click="
                    selectedItem = item;
                    startEdit = true;
                  "
                  class="btn edit"
                >
                  Edit
                </button>
                <button
                  @click="
                    selectedItem = item;
                    startDelete = true;
                  "
                  class="btn delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <button
            :class="{ disabled: currentPage === 1 }"
            @click="$previousPage()"
          >
            <label>Previous</label>
          </button>
          <p v-if="currentPage > 3">...</p>
          <button class="numbers" v-for="number in pagesNumber" :key="number">
            <label
              :class="{ active: currentPage === number }"
              for=""
              v-if="
                (number == 1 && currentPage <= 2) ||
                (currentPage + 2 >= pagesNumber && number >= pagesNumber - 2) ||
                (number >= currentPage - 2 && number <= currentPage + 2)
              "
              @click="$changePage(number)"
            >
              {{ number }}
            </label>
          </button>
          <p v-if="currentPage <= pagesNumber - 3">...</p>
          <button
            :class="{ disabled: currentPage === pagesNumber.length }"
            @click="$nextPage()"
          >
            <label>Next</label>
          </button>
        </div>
      </div>

      <Modal
        :title="'Add Merchant'"
        :size="'lg'"
        v-model:open="startAdd"
        centered
        :okText="'Save'"
        @ok="createItem()"
        width="600px"
      >
        <div class="form-group group-2">
          <div class="input-group">
            <label for="name">Merchant Name</label>
            <a-input
              type="text"
              id="name"
              v-model:value="newItem.name"
              class="form-control"
              placeholder="Merchant Name"
            />
          </div>
          <div class="input-group">
            <label for="name">Owner</label>
            <a-input
              type="text"
              id="name"
              v-model:value="newItem.owner"
              class="form-control"
              placeholder="Owner"
            />
          </div>
        </div>
        <div class="form-group group-2">
          <div class="input-group">
            <label for="name">Email</label>
            <a-input
              type="email"
              id="name"
              v-model:value="newItem.email"
              class="form-control"
              placeholder="Merchant Email"
            />
          </div>
          <div class="input-group">
            <label for="name">Phone</label>
            <a-input
              type="text"
              id="name"
              v-model:value="newItem.phone"
              class="form-control"
              placeholder="Merchant Phone"
            />
          </div>
        </div>
        <div class="form-group group-1">
          <div class="input-group">
            <label for="name">Address</label>
            <a-input
              type="text"
              id="name"
              v-model:value="newItem.address"
              class="form-control"
              placeholder="Merchant Address"
            />
          </div>
        </div>
      </Modal>
      <!-- update modal -->
      <Modal
        :title="'Edit Merchant'"
        :size="'lg'"
        v-model:open="startEdit"
        centered
        :okText="'Update'"
        @ok="updateItem()"
        width="600px"
      >
        <div class="form-group group-2">
          <div class="input-group">
            <label for="name">Merchant Name</label>
            <a-input
              type="text"
              id="name"
              v-model:value="selectedItem.name"
              class="form-control"
              placeholder="Merchant Name"
            />
          </div>
          <div class="input-group">
            <label for="name">Owner</label>
            <a-input
              type="text"
              id="name"
              v-model:value="selectedItem.owner"
              class="form-control"
              placeholder="Owner"
            />
          </div>
        </div>
        <div class="form-group group-2">
          <div class="input-group">
            <label for="name">Email</label>
            <a-input
              type="email"
              id="name"
              v-model:value="selectedItem.email"
              class="form-control"
              placeholder="Merchant Email"
            />
          </div>
          <div class="input-group">
            <label for="name">Phone</label>
            <a-input
              type="text"
              id="name"
              v-model:value="selectedItem.phone"
              class="form-control"
              placeholder="Merchant Phone"
            />
          </div>
        </div>
        <div class="form-group group-1">
          <div class="input-group">
            <label for="name">Address</label>
            <a-input
              type="text"
              id="name"
              v-model:value="selectedItem.address"
              class="form-control"
              placeholder="Merchant Address"
            />
          </div>
        </div>
      </Modal>
      <!-- delete modal -->
      <Modal
        :title="'Delete Merchant'"
        :size="'sm'"
        v-model:open="startDelete"
        centered
        :okText="'Delete'"
        @ok="deleteItem()"
        width="600px"
      >
        <p>Are you sure you want to delete this merchant?</p>
      </Modal>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Topbar from "@/views/admin/components/Topbar.vue";
import { Modal } from "ant-design-vue";
export default {
  components: {
    Topbar,
    Modal,
  },
  data() {
    return {
      allItemsCount: 1,
      itemsPerpage: 10,
      pagesNumber: 1,
      currentPage: 1,
      allData: [],
      searchQuery: {
        search: "",
        created_by: "all",
      },
      startAdd: false,
      startEdit: false,
      startDelete: false,
      selectedItem: {},
      newItem: {
        name: "",
        owner: "",
        email: "",
        phone: "",
        address: "",
      },
    };
  },
  methods: {
    getItems() {
      this.$startLoader();
      this.$store
        .dispatch("GET_MERCHANTS", {
          token: this.$getAdminToken(),
          data: {
            paginate: 10,
            page: this.currentPage,
            searchQuery: this.searchQuery,
          },
        })
        .then((res) => {
          if (res) {
            if (res.status === 200) {
              this.allData = res.data.data;
              this.allItemsCount = res.data.total;
              this.pagesNumber = Math.ceil(
                this.allItemsCount / this.itemsPerpage
              );
              this.$stopLoader();
            } else {
              toast.error(res.data.message);
              this.$stopLoader();
            }
          }
        })
        .catch(() => {
          toast.error("Something went wrong, please try again later.");
          this.$stopLoader();
        });
    },
    createItem() {
      if (this.newItem.name) {
        this.$startLoader();
        this.$store
          .dispatch("ADD_MERCHANT", {
            data: {
              ...this.newItem,
            },
            token: this.$getAdminToken(),
          })
          .then((res) => {
            if (res) {
              if (res.status === 200) {
                toast.success(res.data.message);
                this.getItems();
                this.startAdd = false;
                this.$stopLoader();
              } else {
                toast.error(res.data.message);
                this.$stopLoader();
              }
            }
          })
          .catch(() => {
            toast.error("Something went wrong, please try again later.");
            this.$stopLoader();
          });
      } else {
        toast.error("Please fill all fields");
      }
    },
    updateItem() {
      if (this.selectedItem.name) {
        this.$startLoader();
        this.$store
          .dispatch("UPDATE_MERCHANT", {
            data: {
              ...this.selectedItem,
            },
            token: this.$getAdminToken(),
          })
          .then((res) => {
            if (res) {
              if (res.status === 200) {
                toast.success(res.data.message);
                this.getItems();
                this.startEdit = false;
                this.$stopLoader();
              } else {
                toast.error(res.data.message);
                this.$stopLoader();
              }
            }
          })
          .catch(() => {
            toast.error("Something went wrong, please try again later.");
            this.$stopLoader();
          });
      } else {
        toast.error("Please fill all fields");
      }
    },
    deleteItem() {
      this.$startLoader();
      this.$store
        .dispatch("DELETE_MERCHANT", {
          data: {
            ...this.selectedItem,
          },
          token: this.$getAdminToken(),
        })
        .then((res) => {
          if (res) {
            if (res.status === 200) {
              toast.success(res.data.message);
              this.getItems();
              this.startDelete = false;
              this.$stopLoader();
            } else {
              toast.error(res.data.message);
              this.$stopLoader();
            }
          }
        })
        .catch(() => {
          toast.error("Something went wrong, please try again later.");
          this.$stopLoader();
        });
    },
  },
  mounted() {
    this.getItems();
  },
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
  }
}
</style>