export const submitForm = async (email) => {
    try {
        const response = await fetch("http://3.228.97.110:9000/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }
        return { success: true, message: "Form Submitted" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
