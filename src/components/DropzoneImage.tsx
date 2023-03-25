import { CSSProperties, FC, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { setImageSrc } from "@/lib/redux/slices/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const DropzoneImage: FC = () => {
	const dispatch = useDispatch();
	const imageSrc = useSelector((state: RootState) => state.image.imageSrc);
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		accept: {
			image: ["image/jpeg", "image/png", "image/jpg"],
		},
		onDrop: (acceptedFiles) => {
			dispatch(setImageSrc(URL.createObjectURL(acceptedFiles[0])));
		},
	});
	const baseStyle = {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "20px",
		borderWidth: 2,
		borderRadius: 2,
		borderColor: "#eeeeee",
		borderStyle: "dashed",
		outline: "none",
		transition: "border .24s ease-in-out",
	};
	const accentColor = "#ef5241";

	const activeStyle = {
		borderColor: accentColor,
	};

	const acceptStyle = {
		borderColor: accentColor,
	};

	const rejectStyle = {
		borderColor: "#ff1744",
	};
	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept]
	) as CSSProperties;

	return (
		<div className="container">
			<div {...getRootProps({ style })}>
				<div>
					<input {...getInputProps()} />
					<button
						className="btn btn-primary btn-upload"
						style={{ maxWidth: 225 + "px" }}
					>
						<i className="fas fa-upload"></i>
						Upload Image
					</button>
				</div>
				<div className="mt-2 mb-4 fs-4">or you can drop an image here</div>
			</div>
		</div>
	);
};

export default DropzoneImage;
