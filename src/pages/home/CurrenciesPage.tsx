import { Divider, Stack } from "@mui/material";
import { CustomTab, CustomTabsView, SectionTitleView } from "../../components";
import { ContentContainer } from "../../views";
import { useState } from "react";
import { LoanableCoinsSection, TrendingCollateralsSection } from "../sections";

export default function CurrenciesPage() {
  const [activeTab, setActiveTab] = useState("Trending collaterals");
  return (
    <ContentContainer spacing={3}>
      <SectionTitleView header="Cryptocurrencies" />
      <Stack>
        <CustomTabsView value={activeTab}>
          {["Trending collaterals", "Loanable coins"].map((tab) => (
            <CustomTab
              key={tab}
              onClick={() => setActiveTab(tab)}
              value={tab}
              label={tab}
            />
          ))}
        </CustomTabsView>
        <Divider />
      </Stack>
      <Stack width="100%">
        {activeTab === "Trending collaterals" && <TrendingCollateralsSection />}
        {activeTab === "Loanable coins" && <LoanableCoinsSection />}
      </Stack>
    </ContentContainer>
  );
}
