import { BigInt } from "@graphprotocol/graph-ts";
import {
  Contract,
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  RemoveNft,
  Transfer,
  UpdateNftOwner,
  WhitelistingNft,
} from "../generated/Contract/Contract";
import {
  MarketplaceNft,
  NftNewOwner,
  RemoveFromMarketplace,
  ExampleEntity,
} from "../generated/schema";

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex());

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0);
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1);

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;

  // Entities can be written to the store with `.save()`
  entity.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MAX_PER_MINT(...)
  // - contract.MAX_SUPPLY(...)
  // - contract.PRICE(...)
  // - contract.balanceOf(...)
  // - contract.baseTokenURI(...)
  // - contract.finalMintAmount(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.mdata(...)
  // - contract.name(...)
  // - contract.openPresale(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.presaleMintAmount(...)
  // - contract.primaryToken(...)
  // - contract.protocolToken(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenIdToPrice(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.tokensOfOwner(...)
  // - contract.totalSupply(...)
  // - contract.wallet(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRemoveNft(event: RemoveNft): void {
  let entity = RemoveFromMarketplace.load(event.params.tokenId.toHexString());

  if (!entity) {
    entity = new RemoveFromMarketplace(event.params.tokenId.toHexString());
  }
  entity.tokenId = event.params.tokenId;
  entity.owner = event.params.owner;

  entity.save();
}

export function handleTransfer(event: Transfer): void {}

export function handleUpdateNftOwner(event: UpdateNftOwner): void {
  let entity = NftNewOwner.load(event.params.tokenId.toHexString());

  if (!entity) {
    entity = new NftNewOwner(event.params.tokenId.toHexString());
  }
  entity.tokenId = event.params.tokenId;
  entity.oldOwner = event.params.prevOwner;
  entity.newOwner = event.params.newOwner;
  entity.time = event.params.time;

  entity.save();
}

export function handleWhitelistingNft(event: WhitelistingNft): void {
  let entity = MarketplaceNft.load(event.params.tokenId.toHexString());

  if (!entity) {
    entity = new MarketplaceNft(event.params.tokenId.toHexString());

    // Entity fields can be set using simple assignments
    // entity.count = BigInt.fromI32(0)
  }

  entity.owner = event.params.owner;
  entity.tokenId = event.params.tokenId;
  entity.price = event.params.price;
  entity.token = event.params.tokenAddress;
  entity.time = event.params.time;

  entity.save();
}
