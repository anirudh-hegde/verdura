import google.generativeai as genai
import streamlit as st
from PIL import Image
from streamlit_option_menu import option_menu

st.set_page_config(
	page_title="EcoLens", page_icon="🧿"
)

with st.sidebar:
	# pages = option_menu("Go to",
	# 					["Intro", "About", "Get started"]
	# 					)
	API_KEY = st.sidebar.text_input("Enter your API Key "
									"(Get your Google Gemini API key from "
									"[here](https://makersuite.google.com/app/apikey)) : ",
									type="password")
	
	st.write("---")
	st.subheader("Follow me on: ")
	st.write("𝕏 -> [@Anirudh91017141](https://x.com/Anirudh91017141)")
	st.write("LinkedIn -> [anirudhhegde](https://www.linkedin.com/in/anirudhhegde/)")
	st.write("GitHub -> [anirudh-hegde](https://www.github.com/anirudh-hegde)")


def main():
	l, c, r = st.columns(3)
	with c:
		st.image("images/glens.png", width=200)
	image_upload = st.file_uploader("Choose the image: ", type=["jpg", "jpeg", "png"])
	
	if image_upload:
		if st.button("Check Recyclability"):
			img = Image.open(image_upload)
			
			genai.configure(api_key=API_KEY)
			model = genai.GenerativeModel("gemini-1.5-flash")
			
			content_on_image = model.generate_content(
				["Classify the uploaded image as: "
				 "1) Recyclability: Is the material Recyclable or UnRecyclable? "
				 "Provide a confidence score (in percentage)."
				 "2) Presence of Harmful Chemicals: Identify harmful chemicals are present. "
				 "List them if possible and also provide a confidence score."
				 "3) Environmental Harm: How is this material harmful to the environment? "
				 "List 2-3 main impacts."
				 "4) Waste Management: Provide 4-5 suggestions on how to manage or dispose of "
				 "this material responsibly."
				 "Please provide the response in 5-6 points, with each classification and advice "
				 "supported by a confidence score.", img]
			)
			
			st.image(img)
			st.markdown(content_on_image.text)


if __name__ == "__main__":
	main()
