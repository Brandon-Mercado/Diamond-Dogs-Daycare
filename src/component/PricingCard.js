import React from "react";
import { Icon } from "@iconify/react";

function PricingCard(props) {
  return (
    <div class="pl-1 pt-10 mx-auto">
      <div class="border-black shadow-lg rounded-2xl w-64 bg-gray-700 dark:bg-gray-800 p-4">
        <p class="text-white dark:text-white text-3xl font-bold">
          {props.title}
        </p>
        <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
          {props.subtitle}
        </p>
        <p class="text-white dark:text-white  text-3xl font-bold">
          {props.price}
        </p>
        <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
          {props.subprice}
        </p>
        <button
          type="button"
          class="w-56 m-auto px-3 py-3 font-bold text-md shadow border border-black rounded-lg text-black bg-white hover:bg-pink-300 hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
        >
          Book now
        </button>
        <ul class="text-sm text-white dark:text-white w-full mt-6 mb-6">
          <li class="mb-3 flex items-center">
            <Icon
              class="text-xl mr-2 pr-1  text-indigo-400 hover:text-pink-400"
              icon="mdi:lightning-bolt-circle"
            />
            {props.subtext1}
          </li>
          <li class="mb-3 flex items-center">
            <Icon
              class="text-xl mr-2 pr-1 text-indigo-400 hover:text-pink-400"
              icon="mdi:lightning-bolt-circle"
            />
            {props.subtext2}
          </li>
          <li class="mb-3 flex items-center">
            <Icon
              class="text-xl mr-2 pr-1  text-indigo-400 hover:text-pink-400"
              icon="mdi:lightning-bolt-circle"
            />
            {props.subtext3}
          </li>
        </ul>
        <span class="w-56 block bg-gray-100 h-1 rounded-lg my-2"></span>
        <ul class="text-sm text-white dark:text-white w-full mt-6 mb-6">
          <li class="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#93c5fd"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
            </svg>
            <div>{props.addon1}</div>
          </li>
          <li class="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#93c5fd"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
            </svg>
            <div>{props.addon2}</div>
          </li>
          <li class="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#93c5fd"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
            </svg>
            <div>{props.addon3}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PricingCard;
