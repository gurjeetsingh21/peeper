import React from "react";
import { useSelector } from "react-redux";
import Card from "@/atoms/Card/Card";
import moment from "moment";
import { getTimeDifference } from "@/utils/helper";

const ReferralDetails = () => {
  const { data } = useSelector((state) => state.referralData);
  const { registerReferralEntities } = data;

  return (
    <Card title="Referral Details" height="h-[250px]">
      {registerReferralEntities?.map((data) => (
        <React.Fragment key={data.id}>
          <div className="py-1.5 text-base font-semibold flex flex-row justify-between ">
            <div>
              <span className="text-[#10B981]">{`${data?.referredTo.slice(
                0,
                4
              )}...${data?.referredTo.slice(-4)}`}</span>{" "}
              registered, invited by{" "}
              <span className="text-[#10B981]">{`${data?.referredBy.slice(
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
          </div>
          <hr className="border-dashed w-full border-[#717572]" />
        </React.Fragment>
      ))}
    </Card>
  );
};

export default ReferralDetails;
