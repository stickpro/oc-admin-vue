<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button
    @click="open = !open"
    class="inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    Добавить новый
  </button>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-y-auto"
      style="z-index: 1000"
      @close="open = false"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationIcon
                    class="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Добавить новую почту
                  </DialogTitle>
                  <div class="mt-2">
                    <div class="flex flex-row flex-wrap gap-6">
                      <div class="w-full">
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
                      <div class="w-full">
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
                      <div class="w-full">
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
                      <div class="w-full">
                        <label
                          :for="`${form.id}__chatid`"
                          class="block text-sm font-medium text-gray-700"
                          >Шаблон сообщения</label
                        >
                        <div class="mt-1 rounded-md shadow-sm">
                          <textarea
                            v-model="form.message"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Ваш шаблон сообщения при отправке"
                          ></textarea>
                          <p
                            class="font-normal leading-normal mt-0 text-gray-800"
                          >
                            '${from}' - Адрес отправителя
                          </p>
                          <p
                            class="font-normal leading-normal mt-0 text-gray-800"
                          >
                            '${to}' - Адрес получателя
                          </p>
                          <p
                            class="font-normal leading-normal mt-0 text-gray-800"
                          >
                            '${subject}' - Тема письма
                          </p>
                          <p
                            class="font-normal leading-normal mt-0 text-gray-800"
                          >
                            '${text}' - Текст письма
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="addNew()"
              >
                Сохранить
              </button>
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="open = false"
                ref="cancelButtonRef"
              >
                Отмена
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationIcon } from "@heroicons/vue/outline";

export default {
  inject: ["$config"],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
  },
  data() {
    return {
      open: false,
      form: { id: 1, email: "", password: "", chat_id: "", message: "" },
      res: {},
    };
  },
  methods: {
    async addNew() {
      const res = await fetch(
        `${this.$config.requestConfig.baseUrl}${this.$config.requestConfig.baseRoute}/add&${this.$config.requestConfig.tokenName}=${this.$config.requestConfig.token}`,
        {
          method: "POST",
          body: JSON.stringify(this.form),
        }
      );
      this.res = res;
      this.open = false;

      await this.$emit("load");
    },
  },
};
</script>
