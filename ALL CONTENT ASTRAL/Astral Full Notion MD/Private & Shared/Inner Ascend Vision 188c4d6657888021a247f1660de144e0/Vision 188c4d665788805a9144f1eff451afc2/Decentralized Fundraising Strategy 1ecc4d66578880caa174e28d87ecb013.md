# Decentralized Fundraising Strategy

# **Proyecto Salvaje**

**Introduction**

Proyecto Salvaje is a regenerative land project rooted in sacred, ecological, and decolonial values. This strategy outlines how the project can leverage **Web3 tools** – specifically **NFTs** (non-fungible tokens) and a **community DAO token** – to raise funds and empower a local community. The goal is to create a **decentralized fundraising model** where NFTs serve as both **fundraising instruments and access credentials** to the land, while a utility token underpins a community-run **DAO (Decentralized Autonomous Organization)** for governance and local economic activity. By learning from successful Regenerative Finance (**ReFi**) projects and aligning with sustainable technology, Proyecto Salvaje can fund its mission and build a participatory economy around its land.

## **Successful ReFi Models Using NFTs and DAOs**

Before designing Proyecto Salvaje’s system, it’s useful to examine similar projects that blend NFTs, tokens, and regenerative goals:

- **CityDAO (Wyoming, USA):** *Decentralized Land Ownership.* CityDAO was the first DAO to officially acquire physical land. It raised funds by selling **“Citizenship” NFTs** that conferred voting rights on land decisions . Each NFT holder could vote on what land to buy and how to use it, effectively making them members of a digital city council . CityDAO also formed a legal Wyoming LLC to own the land on behalf of the DAO, illustrating how blockchain communities can hold real assets. This model showed that **NFT memberships** can democratize land access and governance.
- **Nemus (Amazon Rainforest Conservation):** *NFT Guardians for Conservation.* Nemus is a ReFi project securing endangered rainforest land by selling NFTs linked to specific parcels . NFT purchasers become “Guardians” of the land – they sponsor its protection and gain a voice in decisions through the Nemus DAO . The NFT acts as a digital deed of guardianship rather than legal ownership (actual land title remains with a trust to avoid legal complexity). **Utility tokens** (the $NEA token) are earned by NFT holders as rewards, creating an incentive to hold and engage . Guardians also get access to detailed land data (maps, drone footage) and the ability to mint additional NFTs via gamified mechanics . Nemus demonstrates how NFTs can fund land preservation while involving backers in ongoing governance and rewards.
- **CabinDAO (Decentralized Co-living):** *NFT Passports for Physical Access.* CabinDAO is building a network of co-living cabins for creators. In 2021, they launched **NFT “passports”** representing a week-long stay at their rural campus for up to 4 people . Each NFT (priced around 1 ETH at launch) doubled as a **DAO membership token and a reservation voucher** for the cabin stay . This gave holders both tangible utility (a retreat in nature) and participation in the community’s governance. CabinDAO also created a fungible token ($CABIN) for its internal economy and governance rewards . Their approach shows how **tiered NFTs (e.g. by length of stay)** can raise funds and build a physical community, all while keeping decisions in the hands of those who participate.
- **Rewilder & Single Earth:** *Tokenized Conservation.* Rewilder is a crypto-native non-profit DAO that pools funds to **buy land for wildlife conservation** globally . Single.Earth takes a different approach by tokenizing natural capital: it issues tokens (MERIT) based on the ecological value of forests, allowing landowners to earn by conserving nature . Both projects illustrate the ReFi principle of **valuing ecology through tokens** – whether via NFTs representing land or fungible tokens representing ecosystem services. They also emphasize working with local stakeholders (e.g., Rewilder’s land purchases and Single Earth’s payouts to forest owners) to align economic incentives with conservation.

**Key Takeaways:** Successful ReFi projects inspire Proyecto Salvaje to use **NFTs as membership/access passes** and **tokens for governance and rewards**. Like CityDAO and CabinDAO, we will treat NFTs as tickets to participate (in our case, granting access to the land and community). Following Nemus, we’ll ensure NFT holders can join a DAO to guide land use and maybe earn a native token reward. The **common thread** is that backers become **stewards, not just donors** – their NFT or token gives them a stake in the project’s success and a role in its governance.

## **Environmentally-Friendly Blockchain Platforms**

Choosing the right blockchain platform is crucial for low fees, ease of use, and minimal environmental impact – all aligning with Proyecto Salvaje’s values. We recommend using a **proof-of-stake (PoS) blockchain** or layer-2 network that is energy-efficient and cost-effective. Top options include:

- **Celo:** An EVM-compatible Layer-1 platform specifically designed for real-world and mobile use, with a carbon-negative operation. Celo’s PoS consensus uses very little energy and the network even offsets more carbon than it emits . This makes it *environmentally sustainable*. It also boasts **low transaction fees** (often fractions of a cent) and is friendly to smartphone users (important if local community members will use mobile wallets) . Celo is popular in the ReFi space – it launched on Earth Day 2020 and hosts climate initiatives via the Climate Collective – so it aligns philosophically and technically with Proyecto Salvaje.
- **Polygon (Ethereum Layer-2):** Polygon is a widely-used scaling network for Ethereum that offers **dramatically lower gas fees and faster transactions** than the Ethereum mainnet . It uses PoS validators and has achieved carbon neutrality by offsetting its emissions (with help from KlimaDAO) . Many NFT projects and ReFi apps run on Polygon because it provides Ethereum’s security with minimal cost. Polygon would allow inexpensive minting of NFTs and near-instant community token transfers, which is ideal for a grassroots economy. *Example:* KlimaDAO chose Polygon for issuing carbon-backed tokens due to these low fees and speed advantages .
- **Tezos:** A pioneer in energy-efficient blockchains, Tezos operates on Liquid Proof-of-Stake and has extremely low energy per transaction (on the order of 0.001 TWh annually, negligible compared to Proof-of-Work chains) . Tezos has a thriving eco-conscious NFT art community (attracted by low energy use and fees) and could be considered if we prioritize an independent chain with a strong sustainability reputation. However, tooling for DAOs and tokens on Tezos is less developed than EVM-compatible options.

Other platforms like **Solana, Algorand, or NEAR** could be considered for their low fees and PoS security. But **compatibility and community support** are key: Celo and Polygon both let us use Ethereum-standard NFT and DAO tools (smart contracts, wallets like MetaMask or Valora, marketplaces like OpenSea) with minimal friction. **Recommendation:** Use *either* **Celo** (for a standalone ReFi-centric network) or **Polygon** (as a popular Ethereum L2) as the base for Proyecto Salvaje’s NFTs and tokens. Both are **eco-friendly choices** that keep transaction costs low, ensuring that even micro-transactions (like a community member buying goods with the token) won’t be prohibitive.

*(For the purposes of this plan, we will assume an EVM-compatible route – e.g. deploying on Celo or Polygon – so that standard tools and contracts can be used.)*

## **NFT Structure: Tiers and Land Access Benefits**

A multi-tiered NFT system will maximize inclusivity and fundraising by offering different levels of access and perks. Each **Proyecto Salvaje NFT** acts as a **digital key to the land** – granting the holder certain rights (physical access, participation, recognition) – and also serves as a badge of support. We propose the following NFT tiers:

| **NFT Tier** | **Indicative Price (USD or crypto equivalent)** | **Supply (units)** | **Benefits & Access Rights** |
| --- | --- | --- | --- |
| **Seed Supporter** | Low (~$100) | Largest (e.g. 200) | - **Basic Membership** in the DAO (vote on proposals).- **Acknowledgement** (name on supporters wall or NFT art).- **Limited Access:** Right to visit the land during annual open days or community festivals.- **Token Airdrop:** Small allocation of the community utility tokens as a thank-you. |
| **Steward Member** | Medium (~$500) | Moderate (e.g. 50-100) | - All Seed benefits, plus- **Enhanced Access:** e.g. a **3-7 day stay per year** on the land (camping or in provided accommodations) for personal retreat, volunteering, or workshops.- **Governance Role:** Eligibility to propose projects or sit on working groups within the DAO.- **Community Perks:** Unique merchandise or a share of farm produce, priority booking for events. |
| **Guardian Patron** | High (~$1,500 or more) | Limited (e.g. 10-20) | - All Steward benefits, plus- **Extended Access:** e.g. **2-4 weeks of stay per year** (could be split across visits) with the ability to host small events or invite guests to the land.- **Strategic Input:** Membership in a “Guardians Council” – a advisory group that meets periodically (virtually or on-site) to guide long-term strategy (aligned with sacred and ecological goals).- **Legacy Planting:** Option to dedicate a section of the land (e.g. plant a special tree or install a plaque) in recognition of their contribution. |

*The above prices and supply counts are examples and can be adjusted based on fundraising targets and community demand.*

**Access as Utility:** Each NFT serves as a **digital access pass**. For example, a Steward Member could unlock an online booking system for their entitled stay, or show their NFT (via a wallet app) when arriving on-site to verify their membership. This resembles CabinDAO’s model where an NFT equated to a week stay at a physical cabin . By encoding access rights into NFTs, Proyecto Salvaje ensures that contributors tangibly experience the land they are helping regenerate, reinforcing their bond with the project.

**Tiered Privileges:** Higher tiers (Stewards, Guardians) get more immersive benefits, which justifies their larger contribution. Crucially, however, even the basic **Seed Supporters get DAO membership** and a voice in governance – maintaining the principle of *inclusivity*. All NFT holders, regardless of tier, become part of the community and can participate in decision-making (more on governance below). The tiers mainly differ in **land access quotas and recognition**.

**Collectible and Fundraising Value:** Each NFT will be a unique digital collectible (possibly with beautiful artwork reflecting the land’s spirit or indigenous art motifs). This can instill pride in ownership and encourage collectors. Yet we will emphasize **utility over speculation**: the value of these NFTs comes from their use (access and community) rather than resale profit. This approach, as used by projects like Nemus and CabinDAO, attracts *long-term stewards* rather than short-term flippers.

**Reserved NFTs for Local Community:** In line with decolonial values, a portion of NFTs (especially Seed tier) should be **reserved for local indigenous or community members** at low or no cost. This ensures locals who are caretakers of the land’s tradition can join the DAO even if they lack funds. We might airdrop or sponsor some NFTs to key community figures or partner organizations. This way, on-chain governance isn’t dominated solely by outside crypto enthusiasts – it remains grounded in local voices.

## **Utility Token for the Community DAO**

In addition to NFTs, Proyecto Salvaje will issue a **fungible utility token** that powers the local community economy and DAO governance processes. This token (let’s call it $SALVA for now) is **separate from the NFTs** and has different purposes:

- **Local Currency:** $SALVA will function as a *community currency* for economic activities within and around Proyecto Salvaje. Community members, volunteers, and local businesses can use it for exchanges – for instance, buying produce from the land’s regenerative farm, trading services, or rewarding labor. By having an internal token economy, value circulates locally and transparently on-chain. (For practical use, we will provide simple mobile wallet solutions, possibly leveraging Celo’s mobile-first approach, so that even non-technical participants can trade tokens easily.)
- **Incentives & Rewards:** The DAO can use $SALVA to reward contributors who advance the project’s mission. Examples: paying out tokens for completing permaculture work, hosting workshops, contributing to marketing, or even sequestering carbon (measured via regenerative practices). This mirrors how many DAOs incentivize participation; for instance, CityDAO might reward active “citizens,” and Nemus grants its NFT Guardians a yield in its native token . Such rewards encourage active engagement rather than passive holding.
- **Governance Utility:** $SALVA will also carry governance weight. Token-holders can vote on certain proposals, especially those related to budgeting and economic decisions. The token thus represents **stake-based voting power**. However, as discussed below, we won’t rely on token-weighted voting alone for major decisions – to avoid plutocracy – but $SALVA voting can be a component in a hybrid model.

**Initial Distribution:** We propose minting a fixed supply or a capped supply of $SALVA (to avoid uncontrolled inflation). A portion of tokens can be allocated as follows:

- **Treasury:** e.g. 40% held by the DAO treasury for future budgets, ecosystem grants, liquidity provision, etc.
- **NFT Holders Airdrop:** e.g. 20% distributed to NFT buyers (pro-rata by tier or amount contributed). This gives early supporters a stake in the token economy. It’s a bonus for NFT purchasers – similar to how some NFT projects later airdrop tokens to their holders.
- **Local Community Pool:** e.g. 20% set aside to distribute to local residents, indigenous stakeholders, and early contributors who did not buy NFTs. This could be done through a “earn for participation” scheme or a one-time distribution to ensure the community has a meaningful share of tokens from day one (a decolonial approach so that wealth isn’t solely in outside hands).
- **Team & Advisors:** e.g. 10% for project founders, advisors, and initial team, vested over time (to align incentives and ensure long-term commitment).
- **Reserve for Future Use:** e.g. 10% for unforeseen needs or future fundraising rounds.

*(The above percentages are illustrative; the actual tokenomics would be refined with expert input to balance fundraising needs and community ownership.)*

Once the token is distributed, it can be listed on a decentralized exchange (like Ubeswap if on Celo, or a Uniswap/QuickSwap on Polygon) to allow those who earned it to trade if they wish. Care will be taken to communicate that $SALVA is a **utility token**, not an investment security – its primary use is within the community, and holding it gives **influence and utility rather than profit rights**.

**Local Stability Consideration:** To mitigate volatility (since local vendors might be wary of a volatile token), the DAO could implement measures like **pegging certain prices in stablecoins or fiat** and using $SALVA as a discount or reward mechanism. For example, price goods in stablecoin (or EUR) but give a discount for paying in $SALVA, or periodically allow exchanging $SALVA to a stable reserve at a governance-set rate. This keeps the token useful even if markets swing.

## **DAO Governance Structure**

Governance will be designed to balance **inclusive decision-making** (one-person-one-vote ideals) with **practical stake-based input** (token or NFT-weighted voting). We suggest a **hybrid governance model** for the Proyecto Salvaje DAO:

- **Membership and Voting Rights:** Each human participant should ideally have an equal basic voice – aligned with the one-person-one-vote principle common in cooperatives. To implement this on-chain, we use the **NFT membership** as a proxy for personhood: *one NFT equals one vote* in general assembly decisions. This was the approach in CityDAO, where each Citizenship NFT granted voting rights in the DAO . In our case, we will ensure individuals hold only one membership NFT (perhaps the NFT tiers differ in perks but not in vote count, or simply each person can only buy one of each tier at most). If needed, we can enforce one per verified identity (using tools like BrightID or World ID) to prevent any single person accumulating many votes.
- **Council or Hybrid Voting:** For strategic or sensitive decisions (e.g., changes to the land, large fund allocations), we propose a **two-tier governance process**:
    1. A **Community Council** composed of local stewards and perhaps Guardian-tier members – this ensures those with on-the-ground knowledge or significant commitment have a deliberative body. This council could operate on a one-person-one-vote basis internally or even off-chain consensus, then present proposals to the broader DAO.
    2. **DAO-Wide Vote:** All NFT holders vote on proposals, with each member having equal say (one member = one vote). For certain budgetary matters, we could weight votes by the amount of $SALVA token held – but we must avoid token whales overruling the community. One solution is **quadratic voting**, where votes weight is the square root of tokens staked, reducing the influence of large holders and encouraging broad support.
    
    A **hybrid voting rule** might require that a proposal passes both a *membership vote threshold* (e.g., majority of NFT holders in favor) **and** a *token vote threshold* (e.g., a quorum of tokens supporting). This is akin to requiring consensus from both people and capital, preventing purely token-weighted decisions that could undermine community values.
    
- **Governance Mechanisms:** We will utilize established DAO tools:
    - **Snapshot** for off-chain voting using NFT or ERC-20 balances (Snapshot already supports strategies for NFT votes and quadratic voting).
    - **On-chain Governance** (optional): Platforms like **Aragon** or **DAOstack** could be used if we want binding on-chain votes for certain actions. Aragon, for example, allows setting up a DAO where each NFT can be configured as a voting share.
    - **Multisig for Execution:** A Gnosis Safe multi-signature wallet can hold the treasury. Elected community members (including local reps) can be Safe signers to execute decisions, adding a human check layer.
    - **Proposal process:** A forum (e.g., Commonwealth or Discourse) can be used for discussion, and a **proposal template** ensures each decision is well-documented (covering how it aligns with ecological and sacred principles, not just costs/benefits).
- **One Member, One Vote vs Token Weight – Rationale:** A one-person-one-vote system (like many co-ops use) aligns with decolonial values by preventing wealth-based dominance. However, because some contributors will have invested more (buying higher-tier NFTs or holding more tokens), a hybrid gives them proportional input on financial matters without letting them control everything. For everyday operations, **consensus and community dialogues** can guide decisions (possibly using sociocratic circles or indigenous consensus models off-chain and then ratifying on-chain). The formal voting is a safety net and transparency tool.
- **Transparency and Accountability:** All proposals and votes will be public on the blockchain or forum. This transparency builds trust and also holds leaders accountable. Smart contracts can be used to **enforce important rules** (e.g., treasury spending limits without approval, or automatic token vesting for team to prevent dumping).

In summary, **governance will be democratic but augmented by token incentives**. By giving each NFT holder a vote, we ensure broad participation. By also using the utility token in governance, we recognize deeper involvement – but we will cap that influence to keep power diffuse. This hybrid model honors the sacred principle that *each voice matters* while still leveraging the efficiency of token economics for certain decisions.

## **Fundraising Rollout Plan**

A phased rollout will build momentum and trust, ensuring a successful fundraising while gradually expanding the community:

**Phase 0: Community Building and Design (Pre-fundraising)**

Duration: 2-3 months.

Activities:

- **Create the Narrative:** Clearly articulate Proyecto Salvaje’s vision – how it integrates sacred land care with cutting-edge tools. Stories and media (videos of the land, interviews with project founders or local elders) will be produced to emotionally engage potential supporters.
- **Whitepaper & Litepaper:** Publish detailed and summary documents explaining the project’s goals, the NFT & token model, and how funds will be used (e.g., land purchase/leasing, reforestation, community infrastructure). Transparency at this stage is key to legitimacy.
- **Community Engagement:** Open Discord/Telegram channels, host AMA sessions, and start a newsletter. Early supporters, especially from ReFi and social impact circles, can be invited to join discussions. Feedback from these engaged people can refine the NFT tier benefits or governance approach.
- **Partnerships:** Secure partnerships or endorsements (even informal) with ReFi groups (e.g., Celo’s Climate Collective, ReFi DAO media【0†】, or Gitcoin if applicable) and aligned organizations (environmental NGOs, indigenous rights groups). This will broaden outreach beyond crypto natives, attracting donors who care about regenerative projects.
- **Technical Prep:** Set up necessary contracts (with audits) for NFTs and tokens. If using a platform like Mirror for the initial sale, prepare that campaign. Ensure legal consultation for the planned sale (more in risks section).

**Phase 1: Seed NFT Launch** (Genesis Drop)

Duration: 1 month (launch and distribution).

Goal: Engage core supporters and raise initial capital while testing the system.

Details:

- **Whitelist & Local Allocation:** Before public sale, allow *community insiders* to claim a number of NFTs. This includes local community members (who receive their reserved NFTs, possibly free or at a nominal price) and strategic partners/advisors who are committed to the project. By doing this first, we ensure a base of genuine holders.
- **Genesis NFT Sale:** Offer a first batch of NFTs (perhaps a portion of each tier) via a crowdfunding platform. For example, use **Mirror’s NFT Crowdfund** module, as CityDAO did, to sell NFTs in exchange for crypto . Mirror would allow us to set a funding goal and issue the “Citizenship” or membership NFTs to contributors automatically. Alternatively, a custom website with a web3 checkout (or even accepting credit card payments for user-friendliness) can be used. The sale could last a few weeks or until NFTs sell out.
- **Pricing Strategy:** Possibly offer **slightly lower prices** in this genesis round or bonus perks (e.g. extra token airdrop) to reward early backers. This creates an incentive to join early. Ensure pricing is still reasonable to not exclude people – the lower-tier NFT should be affordable to broad supporters.
- **Marketing:** Leverage social media (Twitter/X, Instagram) with storytelling. Highlight that by buying now, supporters become “founding members” of a groundbreaking regenerative DAO. Countdown posts, live updates on how many NFTs remain, and sharing uses of funds (e.g. “with this funding we will plant X trees or secure Y hectares”) can drive urgency.
- **Outcome:** Funds from Phase 1 can be used to kickstart immediate needs (maybe securing land options or starting nurseries). More importantly, Phase 1 establishes a *community of early adopters* who feel ownership and will evangelize the project.

**Phase 2: Main Fundraising & Token Launch**

Duration: 2-3 months post-Phase1.

Goal: Complete the sale of remaining NFTs, generate broader awareness, and introduce the $SALVA token.

Details:

- **Public NFT Sale:** Open sales of the remaining NFTs (all tiers) to the public. List the NFTs on a popular marketplace like **OpenSea** (which supports Polygon, Celo via its integration) to increase visibility. We can also conduct direct sales via the project site. A limited-time “public mint” window can create scarcity (e.g., “Only 2 weeks to mint your membership for Proyecto Salvaje!”).
- **Tiered Rollout:** If demand is uncertain, consider releasing one tier at a time or in waves. For instance, start with Seed Supporter NFTs; once those are 80% sold, release Steward NFTs, then Guardians. This staggered approach manages supply and can build hype (“next week, the Guardian Patron NFTs go live!”).
- **Token Generation Event (TGE):** Once a critical mass of NFT holders exist, launch the $SALVA token. This might involve **airdropping tokens** to NFT holders (as per allocation) and setting up a liquidity pool on a DEX. The token launch should be timed such that there is already a user base (the NFT community) and clear utility ready (e.g., if any pilot local stores or initial governance votes can use the token).
- **Marketing & PR:** At this stage, pitch the story to crypto media and mainstream sustainability media. Possible angles: *“Decolonizing Conservation: How Proyecto Salvaje uses NFTs to fund land regeneration”* or *“From Sacred Land to DAO: [Region] community taps Web3 for ecological revival”*. Case studies from Phase 1 (like profiles of a local farmer who joined the DAO, or an NFT holder who visited the land) can personalize the impact. Continue content marketing: regular blog updates (Mirrors or Medium posts), Twitter threads about ReFi, perhaps YouTube interviews. Also encourage user-generated content: NFT holders sharing why they joined, etc.
- **Community Events:** Host a virtual summit or Twitter Spaces with other ReFi luminaries to discuss the project’s vision. This not only markets the sale but also positions Proyecto Salvaje as a thought leader in regenerative crypto. Additionally, if feasible, an on-site small launch event with local press could be powerful (and streamed online).
- **Sell-out and Transition:** If all NFTs sell or fundraising targets are met, officially **close the sale** and celebrate the formation of the DAO. Transition governance to token holders/NFT members formally – e.g., first community vote on ratifying a charter or electing a multisig committee.

**Phase 3: Post-Fundraising Growth & Sustainability**

Ongoing.

Goal: Deliver on promises, grow the community, and ensure sustainable operations.

Activities:

- **Land Access Operations:** Implement the processes for NFT holders to use their access rights. For example, build the reservation system for stays, schedule community volunteer days, etc. It’s critical to honor the access benefits smoothly, as this will maintain trust. A portion of funds should be allocated to hire coordinators or caretakers to manage these visits.
- **Governance Kicks Off:** Begin regular DAO meetings (could be quarterly “assemblies”), voting cycles for proposals (using Snapshot or on-chain voting). Early proposals might include budget allocations (e.g., “invest X from treasury into solar panels for the project” or “sponsor a local workshop series”) or community guidelines. Moderation and conflict resolution frameworks (possibly inspired by indigenous practices of consensus) should be established early.
- **Token Utility Rollout:** Encourage use of $SALVA in the local community. For instance, partner with a nearby market so they accept $SALVA or give discounts to token holders, or use $SALVA to pay local youth for part-time work reforesting the land. These real use cases will stabilize the token’s value and embed it in daily life. The DAO can also explore **DeFi integrations** to earn yield on treasury assets (preferably in stablecoins) to create a revenue stream for the community.
- **Continuous Marketing:** Share milestones and impact metrics. Reports on how funds have been used (e.g., hectares regenerated, biodiversity improvements, number of community members employed) keep the narrative positive. This can attract additional donors or even grant funding (the DAO could still accept donations outside of NFTs/tokens for those who prefer traditional support).
- **Secondary Markets & Future Rounds:** If someone cannot continue their membership, they might resell their NFT on the secondary market (e.g., OpenSea). We will set a **royalty fee** (say 5-10%) on NFT resales that goes back to the treasury to fund more regeneration – turning any speculative activity into further support. If expansion is planned (say Proyecto Salvaje wants to acquire more land or start a sister site), the DAO could in future issue a **new NFT collection or bond tokens** to fund it, but such decisions will go through governance. Essentially, Phase 3 is about **long-term empowerment**: the community should be self-driven, with the initial framework we’ve created.

## **Tools and Platforms for Implementation**

To implement this strategy efficiently, we will leverage existing Web3 tools and platforms:

- **NFT Minting & Marketplace:** For the initial sale, **Mirror.xyz** is a great option – it allows launching a crowdfunding campaign where contributors receive NFTs . This integrates well with Ethereum and layer-2 networks and provides a smooth UI for storytelling plus sale. Alternatively, custom minting dApps can be built using **Thirdweb** or **Manifold** (no-code NFT deployment platforms), which let us define the NFT metadata (art, tier, benefits) and sale conditions. Once minted, NFTs will be tradable on popular marketplaces:
    - *OpenSea* – supports Ethereum, Polygon, and some other chains. It’s the largest NFT marketplace, which can attract NFT collectors who stumble upon our project.
    - *Rarible* – multi-chain marketplace with a “Marketplace Builder” if we want a branded marketplace for Proyecto Salvaje’s NFTs.
    - If using Tezos, platforms like *Objkt.com* or *Teia* would be relevant; for Celo, options include *Ubeswap NFT* or integration via OpenSea’s Celo support.
    
    We will ensure the NFTs follow popular standards (ERC-721 or ERC-1155) for compatibility.
    
- **DAO Governance Tools:**
    - *Snapshot:* Off-chain voting tool widely used by DAOs for flexible voting strategies (1 NFT = 1 vote, or ERC-20 weighted, or quadratic voting, etc.). We can create a Snapshot space for Proyecto Salvaje where proposals are published and NFT holders cast votes easily by signing messages (no gas fees).
    - *Aragon/DAOstack or Colony:* If on-chain execution is needed (like automatically enforcing vote outcomes), Aragon DAO framework can be set up on Polygon/Celo. It would manage membership (we can whitelist NFT holders) and proposals with on-chain transactions. **Colony** is another platform focusing on task management and reputation in DAOs, which could be useful if we want to track contributions in a non-monetary way.
    - *Commonwealth.im:* A forum platform integrated with web3 login, good for proposal discussions and polling before formal votes.
    - *Discord + Collab.Land:* Discord will be our community hub, and Collab.Land (a bot) can token-gate channels. For example, only NFT holders can enter certain discussion channels or see updates about governance. This helps create a sense of exclusivity and ensures decision chats are with verified members.
    - *Gnosis Safe multisig:* The community-elected treasurers will manage funds via a Gnosis Safe wallet. We can integrate Snapshot with Safe via **SafeSnap**, allowing off-chain votes to trigger on-chain transactions (through a module) if we desire a trust-minimized process.
- **Token Issuance & Management:**
    - *OpenZeppelin Contracts:* For deploying the $SALVA ERC-20 token, we can use battle-tested OpenZeppelin libraries, setting up features like pausing (if needed in emergencies) or snapshots for voting.
    - *Liquidity & DeX:* Use Uniswap V3 or Sushi (or Ubeswap on Celo) to create a token pair (e.g. $SALVA/cUSD or $SALVA/MATIC) for liquidity. Possibly use a small portion of funds to seed this liquidity and stabilize initial trading.
    - *Rewards Distribution:* If we implement yield or rewards, tools like **Coordinape** (for community members to allocate token rewards among themselves) or custom reward contracts (for e.g., staking NFTs to earn tokens) can be used. For example, Nemus might allow staking NFTs for NEA tokens; we could do similar if we want to encourage holding NFTs long-term.
- **Monitoring and Transparency:**
    - *Dune Analytics or Graph Protocol:* Set up a dashboard to track key metrics (number of NFT holders, treasury balance, token distribution, etc.) so anyone can monitor the health of the project.
    - *Impact Tracking:* Although not a blockchain tool per se, we might integrate GIS or IoT data with the blockchain. For instance, using remote sensing to verify reforestation and then publishing results (maybe even as NFTs representing carbon sequestered) to demonstrate impact to token holders.

By using these existing tools, Proyecto Salvaje can avoid reinventing the wheel and focus on mission-specific work. Many of these platforms (Snapshot, Safe, etc.) are open-source and have **no or minimal costs**, which suits a budget-conscious project. Importantly, choosing EVM-compatible chains (Celo/Polygon) means we have **flexibility to mix and match these tools** since most were originally built for Ethereum but now support sidechains and L2s.

## **Risk Mitigation Strategies**

Implementing an innovative Web3 fundraising plan comes with risks. We identify key risk areas and mitigations:

- **Speculation & Community Dilution:** A risk is that NFTs or tokens attract speculators only interested in flipping for profit, not the project’s regenerative mission. This could inflate prices beyond sustainable levels or concentrate assets in the hands of a few. **Mitigations:**
    - Emphasize **utility and mission** in all communications (the NFTs represent membership and responsibility, not just art or an investment).
    - Implement a **royalty on NFT resales** that funnels a percentage back to the project, dampening pure speculation incentive and ensuring if flipping happens, the project benefits.
    - Possibly set a **limit per buyer** during primary sales (e.g., one Steward/Guardian NFT per person) to prevent a single investor buying up many NFTs.
    - If extreme speculation occurs (e.g., someone tries a hostile takeover by buying many tokens/NFTs later), the governance design (one-person-one-vote aspects) will insulate against wealth-based control. We can also introduce *soulbound tokens* or verification to ensure one human doesn’t create many pseudonymous accounts to hoard governance power.
- **Regulatory Compliance:** Navigating securities and land laws is crucial. An NFT that offers access or a token for a community could be misinterpreted by regulators as a security or investment contract if not careful. Also, owning land via a DAO must comply with local property laws.
    - **Mitigations (Legal):** Structure the NFTs and tokens as **utility memberships** with clear terms: they confer usage rights and governance, **not profit-sharing or ownership of land**. This aligns with how Nemus explicitly does *not* confer land title with NFTs (due to Brazilian law) and positions them as sponsorship badges. We will include disclaimers that NFTs are donations/memberships, not real estate or stock.
    - Set up a **legal entity** (e.g., a nonprofit foundation or cooperative) to hold the actual land title in trust for the DAO. Purchasers might sign an agreement (digitally) when buying NFTs acknowledging the arrangement. The DAO LLC model used in Wyoming for CityDAO is one blueprint – we could register an association in the local jurisdiction that recognizes the DAO’s governance in its bylaws.
    - Consult with legal experts in securities and cooperative law. If needed, avoid any language of “investment” or “return” in our materials. The utility token should not be sold in a way that implies investment (we might avoid an ICO-style sale entirely; tokens are earned or given to members rather than sold to public speculatively).
    - If the jurisdiction allows, issue memberships in compliance with crowdfunding laws or cooperative membership rules (the blockchain tokens are essentially a technical representation of those memberships).
- **Technical Risks:** Smart contract bugs, wallet issues, or blockchain performance problems could jeopardize funds or user trust.
    - **Mitigations:** Use **audited contracts** from reputable sources (OpenZeppelin for token/NFT) and if any custom code is written, get it audited by professionals. Use multisig controls for critical functions (so no single dev can rug pull).
    - Choose a reliable blockchain (Polygon and Celo are quite stable; avoid very new chains with unknown issues). If using Polygon, also be prepared for times of network congestion (have patience and communicate with users if transactions slow down).
    - Encourage best security practices to users: provide guides for setting up wallets safely (maybe recommend user-friendly wallets like Valora or MetaMask with a reminder to back up keys). For large contributors not savvy with crypto, consider offering to guide them through a trusted custodial solution (to prevent accidental loss of an NFT by losing a seed phrase).
    - Maintain an emergency **support channel** for users facing technical trouble, especially during the sale (this could be staffed in Discord or via email).
- **Market Volatility:** Crypto markets are volatile; a crash could dry up interest or devalue the treasury.
    - **Mitigations:** Convert a good portion of raised funds into stable assets (like stablecoins or fiat) as soon as they are raised, to secure the budget for land and planned activities. The DAO treasury could adopt a policy: e.g., “At least 70% of funds will be held in stable currency or low-volatility assets to ensure project budget.” This prevents a scenario where Ether or MATIC value drops 50% and the project can no longer afford the land.
    - Conversely, if NFT demand is lower due to a bear market, extend the sale timeline or lower the price for remaining NFTs to ensure we still get a broad distribution (flexibility is key).
    - Design the token such that the community can function even if $SALVA’s market price is low – its utility in the local system (for exchanging labor/food) can be emphasized over any external trading value.
- **Governance Challenges:** There’s risk of governance paralysis or conflict – e.g., power struggles between local community and outside token holders, or simply low participation in voting (apathy).
    - **Mitigations:** Establish a **clear community governance charter** upfront, emphasizing shared values and conflict resolution methods. For example, agree that certain core values (ecological integrity, sacred site protection) are non-negotiable and not subject to change by vote without supermajority.
    - Use **facilitation techniques** from existing community governance: maybe train some members in facilitation or use platforms like Polis to find common ground before proposals.
    - Encourage participation by making it easy (Snapshot voting links, reminders) and meaningful (hold some votes during in-person gatherings or calls so people see the impact).
    - If voter turnout is an issue, consider **quadratic funding** or other democratic innovations for budget allocation, which has been successful in Gitcoin and other communities to allocate funds fairly based on broad input.
    - Implement a **grievance process**: if someone feels the DAO is not acting in line with the decolonial values, have a way to bring that up (perhaps a council of respected community members can mediate). This is where blending traditional community norms with DAO processes is powerful.
- **Reputation and Ethical Risks:** Representing a sacred ecological project in the crypto space can invite scrutiny. Missteps could be seen as exploitation or greenwashing.
    - **Mitigation:** Engage continuously with the on-the-ground community. Ensure local indigenous leaders (if applicable) are not just consulted but in leadership roles. Their guidance can prevent proposals that conflict with cultural values. For instance, they might veto a proposal to monetize something that shouldn’t be (like charging for ceremonies) – this sort of respect will maintain ethical grounding.
    - Be transparent about finances and impact. If something fails (say a tree planting didn’t survive), own up and communicate how we’ll improve. Trust from both crypto supporters and local stakeholders is crucial for longevity.

By proactively addressing these risks, Proyecto Salvaje can avoid common pitfalls that have troubled some crypto projects. In essence, our approach is **conservative in handling money (secure funds, comply with laws)**, **progressive in social design (inclusive governance, conflict resolution)**, and **resilient in technology choices** (using proven tools, not overly complex contracts). This creates a stable foundation on which the community’s vision can flourish.

## **Case Studies & Inspirations for Values Alignment**

Finally, it’s important to highlight how this strategy aligns with **sacred, ecological, and decolonial values**, drawing inspiration from projects that prioritize these principles:

- **Sacred Ecology and “Land as Commons”:** The ethos of Proyecto Salvaje treats land as a living entity, not a commodity. This echoes the approach of indigenous-led land projects and some ReFi efforts like **Public Land Protocol**, which seeks to tokenize land while **rewarding biocompatible design and enabling community governance of assets** . In practice, our strategy ensures the land remains collectively governed and cannot be sold off by any one individual. NFTs confer access rights, but true ownership remains communal – akin to a stewardship model. This is aligned with the concept of land as sacred trust rather than private property.
- **Decolonial Governance:** Traditional governance in many indigenous cultures is consensus-based and egalitarian. Our one-member-one-vote foundation and inclusion of locals with equal standing are drawn from these principles. For example, the **TribalDAO blueprint** (an emerging concept for indigenous DAOs) emphasizes community-led models and local sustainability . We take inspiration from such models by ensuring external investors do not overshadow local voices. The governance charter can explicitly reference respect for indigenous knowledge in decision-making. Additionally, by creating a cooperative economic system (via the local token), we reduce reliance on outside currency and “recolonization” of the economy – the community can build its own regenerative wealth system.
- **Regenerative Finance (ReFi) Values:** Many ReFi projects build in ecological accountability. **Regen Network** (on Cosmos) and **KlimaDAO** (on Polygon) both tie tokens to real ecological outcomes (carbon credits, etc.). While our plan doesn’t create a carbon credit, we can take inspiration by **measuring and reporting ecological impact on-chain**. For instance, the DAO could periodically mint an NFT report or issue a Soulbound Token to itself when certain goals are met (like “Year 1: X hectares reforested, Y species returned”). This creates a transparent record of regeneration. It also taps into the *“regenerative loop”* principle: activities of the community (like reforestation) could in the future generate credits or yield that feeds back value to token holders, further incentivizing good stewardship.
- **Inspirational Communities:** Projects like **SEEDS / Hypha** have attempted to create decentralized economies strongly focused on healing the earth and societal systems. SEEDS frames its currency as part of an “regenerative renaissance” with values of cooperation and community at the core . Similarly, our $SALVA token is not just a digital asset; it’s a tool for solidarity and mutual aid within the community. We can adopt ideas from SEEDS such as rewarding not just capital, but also **“behavioral contributions”** (e.g., people who mentor others, share knowledge of permaculture, etc., could earn badges or extra tokens). This ensures that the **culture of the DAO remains generous and purpose-driven**, not purely transactional.
- **Nemus and Indigenous Partnerships:** Nemus, as mentioned, works closely with indigenous communities in the Amazon to ensure their input in land management . Proyecto Salvaje can similarly institute a practice that any decision affecting cultural sites or local livelihoods must have consent from the local community members in the DAO. Essentially, make the DAO a blend of global supporters and local guardians, where the latter have a special role as **“knowledge holders.”** This could even be formalized: perhaps a certain number of council seats are always reserved for local indigenous reps, or a “cultural veto” that if all local members vote No on a proposal, it cannot pass.

In summary, this strategy is not just about cutting-edge fundraising, but about **weaving technology with tradition**. By learning from both crypto projects and age-old community practices, Proyecto Salvaje’s decentralized fundraising model becomes an extension of its sacred, ecological mission. The NFTs and tokens are merely tools – what truly matters is the empowered community that forms around them. Through careful design, that community will honor the land, uplift local voices, and invite global supporters into a new kind of relationship with nature: one based on respect, regeneration, and shared stewardship.

## **Conclusion**

With this plan, Proyecto Salvaje can launch a **decentralized fundraising campaign** that is comprehensive and values-aligned. By issuing NFT access passes for the regenerative land and a community utility token, the project taps into global crypto liquidity **without sacrificing its ethos**. Each supporter – whether a local villager or an international ally – becomes a co-creator in the vision of healing the land. The recommended tiers and governance ensure fairness and ongoing engagement, rather than one-off extraction of funds. Using sustainable blockchain infrastructure (like Celo or Polygon) keeps the tech footprint light and accessible.

The strategy draws on proven models (CityDAO’s NFT governance , Nemus’s conservation NFTs , CabinDAO’s access passes ) and adapts them to Proyecto Salvaje’s unique context of sacred ecology. It outlines not just how to raise money, but how to cultivate a **living DAO** that embodies decolonial, ecological values. By mitigating risks – from legal to social – we safeguard the project’s integrity and longevity.

If executed with care and community input, this fundraising initiative will do more than generate capital: it will seed a **self-sustaining community** bound by a shared love of the land and empowered by decentralized tools. In a world seeking new ways to finance the climate and social justice movement, Proyecto Salvaje can shine as an example of how to marry ancient wisdom with Web3 innovation – creating a **Regenerative Finance** model that truly regenerates, in spirit and practice.

**Sources:**

- CityDAO – **Mirror Article** on acquiring DAO-owned land (2021)
- Nemus Earth – **FAQ** on NFT “Guardians” and DAO participation (2022)
- CabinDAO – “LARPing as a City State” – **Article** on NFT passports for cabin access (2021)
- Urban AI – “Blockchain Urban Applications” – **ReFi case studies** (2022)
- Messari Report – Celo Q2 2024 – **Carbon-negative, mobile-first blockchain**
- Polygon – OpenSea Guide – **Low fees and speed for NFTs** (2023)