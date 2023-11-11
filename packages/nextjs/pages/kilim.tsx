import { Abi, AbiFunction } from "abitype";
import type { NextPage } from "next";
import { useContractRead } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { DisplayVariable } from "~~/components/scaffold-eth";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { Contract, ContractName } from "~~/utils/scaffold-eth/contract";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";

export const ContractVariable = ({
  refreshDisplayVariables,
  deployedContractData,
  functionName,
}: {
  refreshDisplayVariables: boolean;
  deployedContractData: Contract<ContractName>;
  functionName: string;
}) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    (deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[]
  ).filter(fn => {
    const isNameMatch = fn.name === functionName;
    const isQueryableWithNoParams =
      (fn.stateMutability === "view" || fn.stateMutability === "pure") && fn.inputs.length === 0;
    return isNameMatch && isQueryableWithNoParams;
  });

  if (!functionsToDisplay.length) {
    return <>Contract variable not found</>;
  }

  return (
    <>
      {functionsToDisplay.map(fn => (
        <DisplayVariable
          abiFunction={fn}
          contractAddress={deployedContractData.address}
          key={fn.name}
          refreshDisplayVariables={refreshDisplayVariables}
        />
      ))}
    </>
  );
};

const contractNames = getContractNames();

const Pixel = ({ x, y, state }: { x: number; y: number; state: boolean }) => {
  return (
    <div
      className={`${state ? "bg-black" : "bg-white"} box-border border h-1.5 w-1.5 2xl:h-2 2xl:w-2`}
      onClick={() => alert(`{ x: ${x}, y: ${y}, state: ${state} }`)}
    />
  );
};

const Canvas = ({ data }: { data: boolean[][] }) => {
  const rows = data.map((row, rowIndex) => (
    <div className="flex flex-col" key={rowIndex}>
      {row
        .map((cell, columnIndex) => (
          <Pixel key={rowIndex + " " + columnIndex} x={rowIndex} y={columnIndex} state={cell} />
        ))
        .reverse()}
    </div>
  ));

  return <div className="flex flex-row">{rows}</div>;
};

const KilimState = () => {
  const contractName = "Kilim";
  const { data: deployedContractData } = useDeployedContractInfo(contractName);

  const { data, error, status } = useContractRead({
    address: deployedContractData?.address,
    abi: deployedContractData?.abi,
    functionName: "getStates",
  });

  return (
    <>
      {status !== "success" && <p>{status}</p>}
      {error && (
        <>
          <p className="font-bold">{error.name}</p>
          <p>{error.message}</p>
        </>
      )}
      {data !== null && data !== undefined && (
        <>
          <Canvas data={data as boolean[][]} />
        </>
      )}
    </>
  );
};

const Kilim: NextPage = () => {
  return (
    <>
      <MetaHeader title="Kilim | Scaffold-ETH 2" description="Interact with your kilim" />
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        {contractNames.filter(name => name === "Kilim").length === 0 ? (
          <p className="text-3xl mt-14">Cannot found a Kilim contract!</p>
        ) : (
          <div className="bg-base-300 rounded-3xl shadow-lg shadow-base-300 p-6 2xl:p-8">
            <KilimState />
          </div>
        )}
      </div>
    </>
  );
};

export default Kilim;
