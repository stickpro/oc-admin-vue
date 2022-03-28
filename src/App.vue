<template>
  <div class="container-fluid mx-auto mt-20 min-h-screen">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Настройки для бота
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Токен бота находится непосредственно в коде
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div>
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div
                class="grid grid-cols-7 gap-6 grid-flow-row"
                v-for="form in forms"
                :key="form.id"
              >
                <div class="col-span-5 sm:col-span-2">
                  <label
                    :for="`${form.id}__email`"
                    class="block text-sm font-medium text-gray-700"
                    >Почта</label
                  >
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      v-model="form.email"
                      type="text"
                      name="email"
                      :id="`${form.id}__email`"
                      class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      placeholder="admin@yandex.ru"
                    />
                  </div>
                </div>
                <div class="col-span-5 sm:col-span-2">
                  <label
                    :for="`${form.id}__password`"
                    class="block text-sm font-medium text-gray-700"
                    >Пароль от почты</label
                  >
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      v-model="form.password"
                      type="password"
                      name="password"
                      :id="`${form.id}__password`"
                      class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      placeholder="******"
                    />
                  </div>
                </div>
                <div class="col-span-5 sm:col-span-2">
                  <label
                    :for="`${form.id}__chatid`"
                    class="block text-sm font-medium text-gray-700"
                    >ID чата</label
                  >
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      v-model="form.chat_id"
                      type="text"
                      name="company-website"
                      :id="`${form.id}__chatid`"
                      class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      placeholder="-1231231"
                    />
                  </div>
                </div>

                <div class="col-span-1 sm:col-span-1">
                  <div class="mt-6 flex rounded-md shadow-sm">
                    <button
                      type="button"
                      @click="remove(form.id)"
                      class="mt-3 w-full inline-flex justify-center rounded-md border bg-red-500 border-red-500 shadow-sm px-4 py-2 text-base font-medium text-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      <XCircleIcon
                        class="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Modal @load="loadData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./components/Modal";
import { XCircleIcon } from "@heroicons/vue/outline";
export default {
  name: "App",
  inject: ["$config"],
  components: {
    Modal,
    XCircleIcon,
  },
  data() {
    return {
      forms: [],
    };
  },
  methods: {
    async loadData() {
      const response = await fetch(
        `${this.$config.requestConfig.baseUrl}${this.$config.requestConfig.baseRoute}/settings&${this.$config.requestConfig.tokenName}=${this.$config.requestConfig.token}`
      );
      let data = await response.json();
      this.forms = data.message.result;
    },
    async remove(id) {
      const response = await fetch(
        `${this.$config.requestConfig.baseUrl}${this.$config.requestConfig.baseRoute}/delete/${id}&${this.$config.requestConfig.tokenName}=${this.$config.requestConfig.token}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      await this.loadData()

    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
