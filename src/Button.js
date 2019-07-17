import React, { useState } from 'react'
import { View, Text, Touchable, StyleSheet } from 'react-primitives'

const buttonStyles = ({ hover }) => ({
  alignItems: "center",
  backgroundColor: hover ? "#000" : "#333",
  borderRadius: 5,
  boxShadow: hover ?
    "0px 8px 25px rgba(0, 0, 0, 0.1)" :
    "0px 8px 15px rgba(0, 0, 0, 0.1)",
  display: "flex",
  height: "auto",
  justifyContent: "center",
  padding: 16,
  userSelect: "none",
  width: 150,
})

const styles = StyleSheet.create({
  button: buttonStyles({ hover: false }),
  button_hover: buttonStyles({ hover: true }),
  button_content: {
    color: "#EEE",
    fontSize: 16
  }
});

function Button({ text, onClick }) {
  const [hover, setHover] = useState(false)

  return (
    <Touchable
      accessibilityRole="button"
      accessibilityLabel={text}
      onPress={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <View style={hover ? styles.button_hover : styles.button}>
        <Text style={styles.button_content}>{text}</Text>
      </View>
    </Touchable>
  )
}

export default Button
