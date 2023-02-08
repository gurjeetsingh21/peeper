import React from "react";
import { useSelector } from "react-redux";
import Card from "@/atoms/Card/Card";
import moment from "moment";
import { getTimeDifference } from "@/utils/helper";
import { EXPLORER_URL } from "@/Constants";

const ReferralDetails = () => {
  const { data } = useSelector((state) => state.referralData);
  const { registerReferralEntities } = data;

  return (
    <Card title="Latest Referrals" height="h-full">
      <div className="">
        <div className=" font-bold  grid grid-cols-5 gap-2 rounded-lg p-4 bg-black/20 text-[#10B981]">
          <p>Domain</p>
          <p>Txn ID</p>

          <p>Minter</p>
          <p>Referrer</p>
          <p>Timestamp</p>
        </div>

        {registerReferralEntities?.map((data) => (
          <React.Fragment key={data.id}>
            <div className="grid grid-cols-5 gap-2 items-center border-b border-r border-l font-semibold  rounded-lg border-gray-300/5 p-4 text-gray-200 hover:bg-gray-50/5 cursor-pointer">
              <div className="flex gap-2 items-center">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#7BCEFA] via-[#E37DF4] to-[#F6CB5B]"></div>
                <span className="text-gray-50">{`${data?.domainName}.shm`}</span>{" "}
              </div>
              <a
                href={`${EXPLORER_URL}/tx/${data?.id}`}
                target="_blank"
                className=""
              >{`${data?.id.slice(0, 8)}...${data?.id.slice(-8)}`}</a>

              <span className="">{`${data?.referredTo.slice(
                0,
                6
              )}...${data?.referredBy.slice(-5)}`}</span>
              <span className="">{`${data?.referredBy.slice(
                0,
                6
              )}...${data?.referredBy.slice(-5)}`}</span>
              <span className="">
                {" "}
                {getTimeDifference(
                  Math.floor(
                    moment
                      .duration(moment(new Date()).diff(data.date * 1000))
                      .asMinutes()
                  )
                )}
              </span>
            </div>
            {/* <div className="py-1.5 text-base font-semibold flex flex-row justify-between w-full ">
            <div>
              <span className="">{`${data?.referredTo.slice(
                0,
                4
              )}...${data?.referredTo.slice(-4)}`}</span>{" "}
              registered, invited by{" "}
              <span className="">{`${data?.referredBy.slice(
                0,
                4
              )}...${data?.referredBy.slice(-4)}`}</span>
            </div>
            <div>
              {getTimeDifference(
                Math.floor(
                  moment
                    .duration(moment(new Date()).diff(data.date * 1000))
                    .asMinutes()
                )
              )}{" "}
              ago
            </div>
          </div> */}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};

export default ReferralDetails;
