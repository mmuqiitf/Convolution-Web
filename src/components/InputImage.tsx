"use client";
import { economica } from "@/app/fonts";
import { CSSProperties, FC, useMemo, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { BsZoomIn, BsZoomOut, BsAspectRatio } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

import DropzoneImage from "./DropzoneImage";
const InputImage: FC = () => {
	const dispatch = useDispatch();
	const imageSrc = useSelector((state: RootState) => state.image.imageSrc);

	return (
		<div className={`${economica.className} card `}>
			<div className="card-header">Input Image</div>
			<div className="card-body">
				<DropzoneImage />
				{imageSrc && (
					<TransformWrapper initialScale={1}>
						{({ zoomIn, zoomOut, resetTransform }) => (
							<div>
								<div className="icon third-step mb-5">
									<BsZoomIn
										className="fs-4 tools-icon"
										onClick={() => zoomIn()}
									/>
									<BsZoomOut
										className="fs-4 tools-icon"
										onClick={() => zoomOut()}
									/>
									<BsAspectRatio
										className="fs-4 tools-icon"
										onClick={() => resetTransform()}
									/>
								</div>
								<div className="d-flex justify-content-center">
									<TransformComponent>
										<img
											className="img-fluid"
											src={imageSrc}
											alt="Input Image"
										/>
									</TransformComponent>
								</div>
							</div>
						)}
					</TransformWrapper>
				)}
			</div>
		</div>
	);
};

export default InputImage;
