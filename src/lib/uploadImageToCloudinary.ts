

export default async function uploadImageToCloudinary(imageFile: File) {
    
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "blog-post")

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
    })

    if(!res.ok){
       throw new Error("Failed to Upload Image")
    }

    const data = await res.json();
    return data.secure_url as string;

}