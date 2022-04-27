/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MintSwapCanonicalTokenUpgradableInterface extends utils.Interface {
  contractName: "MintSwapCanonicalTokenUpgradable";
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "bridges(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "burnFrom(address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "init(string,string)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "setBridgeTokenSwapCap(address,uint256)": FunctionFragment;
    "swapBridgeForCanonical(address,uint256)": FunctionFragment;
    "swapCanonicalForBridge(address,uint256)": FunctionFragment;
    "swapSupplies(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateBridgeSupplyCap(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
  encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "bridges", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "burnFrom", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "init", values: [string, string]): string;
  encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setBridgeTokenSwapCap", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "swapBridgeForCanonical", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "swapCanonicalForBridge", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "swapSupplies", values: [string]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
  encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
  encodeFunctionData(functionFragment: "updateBridgeSupplyCap", values: [string, BigNumberish]): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bridges", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBridgeTokenSwapCap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapBridgeForCanonical", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapCanonicalForBridge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapSupplies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateBridgeSupplyCap", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "BridgeSupplyCapUpdated(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenSwapCapUpdated(address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BridgeSupplyCapUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenSwapCapUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type BridgeSupplyCapUpdatedEvent = TypedEvent<[string, BigNumber], { bridge: string; supplyCap: BigNumber }>;

export type BridgeSupplyCapUpdatedEventFilter = TypedEventFilter<BridgeSupplyCapUpdatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type TokenSwapCapUpdatedEvent = TypedEvent<[string, BigNumber], { token: string; cap: BigNumber }>;

export type TokenSwapCapUpdatedEventFilter = TypedEventFilter<TokenSwapCapUpdatedEvent>;

export type TransferEvent = TypedEvent<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface MintSwapCanonicalTokenUpgradable extends BaseContract {
  contractName: "MintSwapCanonicalTokenUpgradable";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MintSwapCanonicalTokenUpgradableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    bridges(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { cap: BigNumber; total: BigNumber }>;

    "burn(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "burn(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    burnFrom(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    init(
      name_: string,
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    mint(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setBridgeTokenSwapCap(
      _bridgeToken: string,
      _swapCap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    swapBridgeForCanonical(
      _bridgeToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    swapCanonicalForBridge(
      _bridgeToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    swapSupplies(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { cap: BigNumber; total: BigNumber }>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateBridgeSupplyCap(
      _bridge: string,
      _cap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  bridges(
    arg0: string,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { cap: BigNumber; total: BigNumber }>;

  "burn(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "burn(address,uint256)"(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  burnFrom(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  init(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  mint(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setBridgeTokenSwapCap(
    _bridgeToken: string,
    _swapCap: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  swapBridgeForCanonical(
    _bridgeToken: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  swapCanonicalForBridge(
    _bridgeToken: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  swapSupplies(
    arg0: string,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { cap: BigNumber; total: BigNumber }>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateBridgeSupplyCap(
    _bridge: string,
    _cap: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    bridges(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { cap: BigNumber; total: BigNumber }>;

    "burn(uint256)"(_amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "burn(address,uint256)"(_from: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    burnFrom(_from: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    init(name_: string, symbol_: string, overrides?: CallOverrides): Promise<void>;

    mint(_to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setBridgeTokenSwapCap(_bridgeToken: string, _swapCap: BigNumberish, overrides?: CallOverrides): Promise<void>;

    swapBridgeForCanonical(_bridgeToken: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    swapCanonicalForBridge(_bridgeToken: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    swapSupplies(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { cap: BigNumber; total: BigNumber }>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    updateBridgeSupplyCap(_bridge: string, _cap: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;

    "BridgeSupplyCapUpdated(address,uint256)"(bridge?: null, supplyCap?: null): BridgeSupplyCapUpdatedEventFilter;
    BridgeSupplyCapUpdated(bridge?: null, supplyCap?: null): BridgeSupplyCapUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    "TokenSwapCapUpdated(address,uint256)"(token?: null, cap?: null): TokenSwapCapUpdatedEventFilter;
    TokenSwapCapUpdated(token?: null, cap?: null): TokenSwapCapUpdatedEventFilter;

    "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
  };

  estimateGas: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    bridges(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "burn(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "burn(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    burnFrom(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    init(
      name_: string,
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    mint(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setBridgeTokenSwapCap(
      _bridgeToken: string,
      _swapCap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    swapBridgeForCanonical(
      _bridgeToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    swapCanonicalForBridge(
      _bridgeToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    swapSupplies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateBridgeSupplyCap(
      _bridge: string,
      _cap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridges(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "burn(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "burn(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    burnFrom(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    init(
      name_: string,
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    mint(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBridgeTokenSwapCap(
      _bridgeToken: string,
      _swapCap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    swapBridgeForCanonical(
      _bridgeToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    swapCanonicalForBridge(
      _bridgeToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    swapSupplies(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateBridgeSupplyCap(
      _bridge: string,
      _cap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
