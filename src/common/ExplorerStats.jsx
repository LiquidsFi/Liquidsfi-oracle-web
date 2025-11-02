/* eslint-disable react/prop-types */
import {
	PiPaperPlaneTilt,
	PiShieldCheck,
	PiUserList,
	PiUsersThree,
} from "react-icons/pi";

export default function ExplorerStats({ totalBalance, totalRes }) {
	return (
		<div className="flex flex-shrink-0 gap-4 mt-8 overflow-auto scroll-track-hide">
			<div className="inline-flex items-center w-full min-w-[272px] gap-3 bg-[#04131F] rounded-xl p-3">
				<PiPaperPlaneTilt className="text-[#4DFFDF] text-[30px]" />
				<div>
					<p className="text-[#6D7A86] text-sm font-medium">Total Messages</p>
					<div className="flex items-end gap-2 mt-1">
						<p className="text-base font-semibold leading-5">
							{totalBalance || 596}
						</p>
					</div>
				</div>
			</div>

			<div className="inline-flex items-center w-full min-w-[272px] gap-3 bg-[#04131F]  rounded-xl p-3">
				<PiShieldCheck className="text-[#4DFFDF] text-[30px]" />
				<div>
					<p className="text-[#6D7A86] text-sm font-medium">
						Total Verified Messages
					</p>
					<div className="flex items-end gap-2 mt-1">
						<p className="text-base font-semibold leading-5">0</p>
					</div>
				</div>
			</div>

			<div className="inline-flex items-center w-full min-w-[272px] gap-3 bg-[#04131F]  rounded-xl p-3">
				<PiUsersThree className="text-[#4DFFDF] text-[30px]" />
				<div>
					<p className="text-[#6D7A86] text-sm font-medium">Total User Count</p>
					<div className="flex items-end gap-2 mt-1">
						<p className="text-base font-semibold leading-5">{3}</p>
					</div>
				</div>
			</div>

			<div className="inline-flex items-center w-full min-w-[272px] h-[87px] gap-3 bg-[#04131F]  rounded-xl p-3">
				<PiUserList className="text-[#4DFFDF] text-[30px]" />
				<div>
					<p className="text-[#6D7A86] text-sm font-medium">Total Clients</p>
					<div className="flex items-end gap-2 mt-1">
						<p className="text-base font-semibold leading-5">{totalRes || 9}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
