import React from 'react'
import { View, StyleSheet } from 'react-primitives'

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: 16,
  }
})

function Center({ children }) {
  return (
    <View style={styles.center}>
      {children}
    </View>
  )
}

export default Center
