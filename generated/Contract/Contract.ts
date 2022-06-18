// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RemoveNft extends ethereum.Event {
  get params(): RemoveNft__Params {
    return new RemoveNft__Params(this);
  }
}

export class RemoveNft__Params {
  _event: RemoveNft;

  constructor(event: RemoveNft) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateNftOwner extends ethereum.Event {
  get params(): UpdateNftOwner__Params {
    return new UpdateNftOwner__Params(this);
  }
}

export class UpdateNftOwner__Params {
  _event: UpdateNftOwner;

  constructor(event: UpdateNftOwner) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get prevOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class WhitelistingNft extends ethereum.Event {
  get params(): WhitelistingNft__Params {
    return new WhitelistingNft__Params(this);
  }
}

export class WhitelistingNft__Params {
  _event: WhitelistingNft;

  constructor(event: WhitelistingNft) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  MAX_PER_MINT(): BigInt {
    let result = super.call("MAX_PER_MINT", "MAX_PER_MINT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_PER_MINT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_PER_MINT", "MAX_PER_MINT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_SUPPLY(): BigInt {
    let result = super.call("MAX_SUPPLY", "MAX_SUPPLY():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_SUPPLY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_SUPPLY", "MAX_SUPPLY():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRICE(): BigInt {
    let result = super.call("PRICE", "PRICE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRICE", "PRICE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseTokenURI(): string {
    let result = super.call("baseTokenURI", "baseTokenURI():(string)", []);

    return result[0].toString();
  }

  try_baseTokenURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseTokenURI", "baseTokenURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  finalMintAmount(): BigInt {
    let result = super.call(
      "finalMintAmount",
      "finalMintAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_finalMintAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "finalMintAmount",
      "finalMintAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mdata(): string {
    let result = super.call("mdata", "mdata():(string)", []);

    return result[0].toString();
  }

  try_mdata(): ethereum.CallResult<string> {
    let result = super.tryCall("mdata", "mdata():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  openPresale(): boolean {
    let result = super.call("openPresale", "openPresale():(bool)", []);

    return result[0].toBoolean();
  }

  try_openPresale(): ethereum.CallResult<boolean> {
    let result = super.tryCall("openPresale", "openPresale():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  presaleMintAmount(param0: Address): BigInt {
    let result = super.call(
      "presaleMintAmount",
      "presaleMintAmount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_presaleMintAmount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "presaleMintAmount",
      "presaleMintAmount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  primaryToken(): Address {
    let result = super.call("primaryToken", "primaryToken():(address)", []);

    return result[0].toAddress();
  }

  try_primaryToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("primaryToken", "primaryToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  protocolToken(): Address {
    let result = super.call("protocolToken", "protocolToken():(address)", []);

    return result[0].toAddress();
  }

  try_protocolToken(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "protocolToken",
      "protocolToken():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenIdToPrice(param0: BigInt): BigInt {
    let result = super.call(
      "tokenIdToPrice",
      "tokenIdToPrice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_tokenIdToPrice(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenIdToPrice",
      "tokenIdToPrice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokensOfOwner(_owner: Address): Array<BigInt> {
    let result = super.call(
      "tokensOfOwner",
      "tokensOfOwner(address):(uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );

    return result[0].toBigIntArray();
  }

  try_tokensOfOwner(_owner: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "tokensOfOwner",
      "tokensOfOwner(address):(uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wallet(): Address {
    let result = super.call("wallet", "wallet():(address)", []);

    return result[0].toAddress();
  }

  try_wallet(): ethereum.CallResult<Address> {
    let result = super.tryCall("wallet", "wallet():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get primaryToken_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get protocolToken_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get mdata_(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddNftsForSaleCall extends ethereum.Call {
  get inputs(): AddNftsForSaleCall__Inputs {
    return new AddNftsForSaleCall__Inputs(this);
  }

  get outputs(): AddNftsForSaleCall__Outputs {
    return new AddNftsForSaleCall__Outputs(this);
  }
}

export class AddNftsForSaleCall__Inputs {
  _call: AddNftsForSaleCall;

  constructor(call: AddNftsForSaleCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get prices(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class AddNftsForSaleCall__Outputs {
  _call: AddNftsForSaleCall;

  constructor(call: AddNftsForSaleCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BuyNftCall extends ethereum.Call {
  get inputs(): BuyNftCall__Inputs {
    return new BuyNftCall__Inputs(this);
  }

  get outputs(): BuyNftCall__Outputs {
    return new BuyNftCall__Outputs(this);
  }
}

export class BuyNftCall__Inputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyNftCall__Outputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }
}

export class ClaimTokensCall extends ethereum.Call {
  get inputs(): ClaimTokensCall__Inputs {
    return new ClaimTokensCall__Inputs(this);
  }

  get outputs(): ClaimTokensCall__Outputs {
    return new ClaimTokensCall__Outputs(this);
  }
}

export class ClaimTokensCall__Inputs {
  _call: ClaimTokensCall;

  constructor(call: ClaimTokensCall) {
    this._call = call;
  }
}

export class ClaimTokensCall__Outputs {
  _call: ClaimTokensCall;

  constructor(call: ClaimTokensCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _count(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RemoveNftsForSaleCall extends ethereum.Call {
  get inputs(): RemoveNftsForSaleCall__Inputs {
    return new RemoveNftsForSaleCall__Inputs(this);
  }

  get outputs(): RemoveNftsForSaleCall__Outputs {
    return new RemoveNftsForSaleCall__Outputs(this);
  }
}

export class RemoveNftsForSaleCall__Inputs {
  _call: RemoveNftsForSaleCall;

  constructor(call: RemoveNftsForSaleCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class RemoveNftsForSaleCall__Outputs {
  _call: RemoveNftsForSaleCall;

  constructor(call: RemoveNftsForSaleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get _baseTokenURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class ToggleSalestatusCall extends ethereum.Call {
  get inputs(): ToggleSalestatusCall__Inputs {
    return new ToggleSalestatusCall__Inputs(this);
  }

  get outputs(): ToggleSalestatusCall__Outputs {
    return new ToggleSalestatusCall__Outputs(this);
  }
}

export class ToggleSalestatusCall__Inputs {
  _call: ToggleSalestatusCall;

  constructor(call: ToggleSalestatusCall) {
    this._call = call;
  }
}

export class ToggleSalestatusCall__Outputs {
  _call: ToggleSalestatusCall;

  constructor(call: ToggleSalestatusCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateMDataNameCall extends ethereum.Call {
  get inputs(): UpdateMDataNameCall__Inputs {
    return new UpdateMDataNameCall__Inputs(this);
  }

  get outputs(): UpdateMDataNameCall__Outputs {
    return new UpdateMDataNameCall__Outputs(this);
  }
}

export class UpdateMDataNameCall__Inputs {
  _call: UpdateMDataNameCall;

  constructor(call: UpdateMDataNameCall) {
    this._call = call;
  }

  get mdata_(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class UpdateMDataNameCall__Outputs {
  _call: UpdateMDataNameCall;

  constructor(call: UpdateMDataNameCall) {
    this._call = call;
  }
}

export class UpdateMintUptoCall extends ethereum.Call {
  get inputs(): UpdateMintUptoCall__Inputs {
    return new UpdateMintUptoCall__Inputs(this);
  }

  get outputs(): UpdateMintUptoCall__Outputs {
    return new UpdateMintUptoCall__Outputs(this);
  }
}

export class UpdateMintUptoCall__Inputs {
  _call: UpdateMintUptoCall;

  constructor(call: UpdateMintUptoCall) {
    this._call = call;
  }

  get newMintUpto(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMintUptoCall__Outputs {
  _call: UpdateMintUptoCall;

  constructor(call: UpdateMintUptoCall) {
    this._call = call;
  }
}

export class UpdatePricesCall extends ethereum.Call {
  get inputs(): UpdatePricesCall__Inputs {
    return new UpdatePricesCall__Inputs(this);
  }

  get outputs(): UpdatePricesCall__Outputs {
    return new UpdatePricesCall__Outputs(this);
  }
}

export class UpdatePricesCall__Inputs {
  _call: UpdatePricesCall;

  constructor(call: UpdatePricesCall) {
    this._call = call;
  }

  get newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePricesCall__Outputs {
  _call: UpdatePricesCall;

  constructor(call: UpdatePricesCall) {
    this._call = call;
  }
}

export class UpdateTokenCall extends ethereum.Call {
  get inputs(): UpdateTokenCall__Inputs {
    return new UpdateTokenCall__Inputs(this);
  }

  get outputs(): UpdateTokenCall__Outputs {
    return new UpdateTokenCall__Outputs(this);
  }
}

export class UpdateTokenCall__Inputs {
  _call: UpdateTokenCall;

  constructor(call: UpdateTokenCall) {
    this._call = call;
  }

  get newToken_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isPrimaryToken(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class UpdateTokenCall__Outputs {
  _call: UpdateTokenCall;

  constructor(call: UpdateTokenCall) {
    this._call = call;
  }
}

export class UpdateWalletCall extends ethereum.Call {
  get inputs(): UpdateWalletCall__Inputs {
    return new UpdateWalletCall__Inputs(this);
  }

  get outputs(): UpdateWalletCall__Outputs {
    return new UpdateWalletCall__Outputs(this);
  }
}

export class UpdateWalletCall__Inputs {
  _call: UpdateWalletCall;

  constructor(call: UpdateWalletCall) {
    this._call = call;
  }

  get _newWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateWalletCall__Outputs {
  _call: UpdateWalletCall;

  constructor(call: UpdateWalletCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}