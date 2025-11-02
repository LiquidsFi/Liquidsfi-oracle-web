/* eslint-disable no-unused-vars */
import { useState } from "react";
import SuccessModal from "../../components/SuccessModal";
import ExplorerStats from "../../common/ExplorerStats";
import ExplorerBanner from "../../common/ExplorerBanner";
import TransactionHistory from "../../common/TransactionHistory";
import SupportedChains from "../../common/SupportedChains";

function Explorer() {
	const [messageId, setMessageId] = useState("");
	const [hashUrl, setHashUrl] = useState("");
	const [totalRes, setTotalRes] = useState(0);

	const [usdtBalance, setUsdtBalance] = useState(0);
	const [usdcBalance, setUsdcBalance] = useState(0);
	const totalBalance = Number(usdtBalance) + Number(usdcBalance);

	const [isModalOpen, setIsModalOpen] = useState(false);

	if (messageId !== "") {
		setHashUrl(() => messageId);
		setIsModalOpen(() => true);
		setMessageId(() => "");
	}

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setMessageId(() => "");
		setHashUrl(() => "");
	};

	return (
		<>
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-gray-200 px-6 py-2 rounded-lg shadow-lg">
						<SuccessModal onClose={handleCloseModal} hashUrl={hashUrl} />
					</div>
				</div>
			)}
			<div className={`text-white ${isModalOpen && "blur-sm"}`}>
				<h1 className="heading-primary">Oracle Metric</h1>

				<ExplorerStats totalBalance={totalBalance} totalRes={totalRes} />

				<ExplorerBanner />

				<div className="grid grid-cols-1 lg:grid-cols-7 gap-[38px]">
					<TransactionHistory />

					<SupportedChains />
				</div>
			</div>
		</>
	);
}

export default Explorer;
