import React from "react";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div>
      <div class="text-center">
        <h1 class="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
          <span class="font-degular font-bold">Pricing</span> for your{" "}
          <span class="font-degular font-bold">Pup</span>
        </h1>
        <p class="text-sm font-normal text-gray-400">
          See below our main three plans for your business, for your startup and
          agency.
        </p>
        <p class="text-sm font-normal text-gray-400">
          It start from here! You can teach yourself what you really like.
        </p>
      </div>
      <div class="flex">
        <PricingCard
          title="Half Day"
          subtitle="Daycare"
          price="$ 20.00"
          subtext1="5 hour maximum"
          subtext2="Playtime"
          subtext3="Bathroom breaks"
          addon1="Walk add-on available"
          addon2="Wash add-on available"
          addon3=""
        />
        <PricingCard
          title="Full Day"
          subtitle="Daycare"
          price="$ 32.00"
          subtext1="Playtime"
          subtext2="Bathroom breaks"
          subtext3="Boarding Available"
          addon1="Walk add-on available"
          addon2="Wash add-on available"
          addon3=""
        />
        <PricingCard
          title="Half Day"
          subtitle="Daycare"
          price="$ 20.00"
          subtext1="5 hour maximum"
          subtext2="Playtime"
          subtext3="Bathroom breaks"
          addon1="Walk add-on available"
          addon2="Wash add-on available"
          addon3=""
        />
      </div>
    </div>
  );
}

export default Pricing;
