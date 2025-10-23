"use client";

import CustomNavTabs from "@/customComponents/CustomNavTabs";
import IconifyIcon from "@/customComponents/IconifyIcon";
import { cn } from "@/lib/utils";
import { useAppSettingsStore } from "@/store/appSettings";
import React, { useLayoutEffect, useState } from "react";
import AdminReviewNotes from "./partials/AdminReviewNotes";
import WardDetailsForm from "./partials/WardDetailsForm";
import WardFilesForm from "./partials/WardFilesForm";
import GuardianDetailsForm from "./partials/GuardianDetailsForm";
import InvitationsForm from "./partials/InvitationsForm";
import PaymentInformation from "@/app/private/admin/applications/[applicationId]/partials/PaymentInformation";

type TApplicationDetails =
  | "Ward Details"
  | "Ward Files"
  | "Guardian Details"
  | "Invitations"
  | "Payment Information";

const ClientApplicationDetail = () => {
  const { updatenoMaxWidthStatus } = useAppSettingsStore();

  // views
  const [currentView, setcurrentView] =
    useState<TApplicationDetails>("Ward Details");

  // this is a useeffect that updates the no max width status to true when the page is mounted
  useLayoutEffect(() => {
    updatenoMaxWidthStatus(true);
    return () => {
      updatenoMaxWidthStatus(false);
    };
  }, []);

  return (
    <div className="userApplicationDetails relative">
      {/* page header */}
      <div className="topBar border-b bg-white z-20 px-8 py-6 sticky top-0">
        <div className="barContents mx-auto maximum-width flex items-center justify-between w-full">
          {/* left side */}
          <div className="leftSide flex items-center gap-6">
            {/* back */}
            <div className="arrowBack size-8 rounded-full bg-gray-300 cursor-pointer">
              <IconifyIcon icon="ep:back" fontSize={14} />
            </div>
            {/* header details */}
            <div className="headerDetails">
              <div className="font-semibold text-2xl mb-1 flex items-center gap-4 divide-x">
                <span className="pr-4"> Maxwell Konadu </span>{" "}
                <span className="font-thin text-base text-gray-500">
                  5th Grade
                </span>
              </div>
              <p className="text-sm text-gray-500">Monday, 5th 2025.</p>
            </div>
          </div>

          {/* right side */}
          <div
            className={cn(
              "currentStatus px- pr-3 py-0.4 rounded-full bg-primary/10 flex items-center gap-2 text-primary"
            )}
          >
            <IconifyIcon icon="icons8:checked" className="text-xs" />
            <p className="text-xs">Sumbitted</p>
          </div>
        </div>
      </div>

      <div className="applicationContentDets mx-auto maximum-width">
        {/* view tabs */}
        <div className="tabList my-6 h-[36px] sticky top-26 z-10 bg-[#f8f8fb] border-x-none w-full">
          <CustomNavTabs
            initialTab={currentView}
            clicked={(val: any) => {
              setcurrentView(val);
            }}
            tabs={[
              "Ward Details",
              "Ward Files",
              "Guardian Details",
              "Invitations",
              "Payment Information",
            ]}
          />
        </div>

        {/* VIEWS */}
        <div className="viewsContainer grid grid-cols-9 gap-8 pb-10 px-1">
          <div className="forms col-span-6">
            {/* Ward details */}
            {currentView == "Ward Details" && <WardDetailsForm />}
            {/* ward files */}
            {currentView == "Ward Files" && <WardFilesForm />}
            {/* Guardian Details */}
            {currentView == "Guardian Details" && <GuardianDetailsForm />}
            {currentView == "Invitations" && <InvitationsForm />}
            {currentView == "Payment Information" && <PaymentInformation />}
          </div>

          {/* Admin Review Notes */}
          <div className="actionsContext col-span-3 sticky top-40 h-fit">
            <AdminReviewNotes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientApplicationDetail;
