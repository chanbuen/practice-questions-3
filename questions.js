//Validate BST 

let tree = new Node(10)
tree.left = new Node(5)
tree.right = new Node(15)
tree.left.left = new Node(2)
tree.left.right = new Node(11)
tree.left.right.right = new Node(11)
tree.right.right = new Node(22)
tree.left.left.left = new Node(1)


function validateBst(tree) {
	let isLessThan = true
	let isGreaterThan = true
  if (tree) {
		isLessThan = tree.left ? tree.left.value < tree.value : true
		isGreaterThan = tree.right ? tree.value <= tree.right.value : true
		if (isLessThan&&isGreaterThan) {
			return validateBst(tree.left)&&validateBst(tree.right)
		} else {
			return false
		}
	} 

	return isLessThan&&isGreaterThan
}

// function validateHelper(tree, min, max, direction) {
//   if (!tree) return true;
//   if (tree.value < min || tree.value >= max) return false;
// 	console.log('tree:', tree.value, 'min:', min, 'max:', max, direction)
//   let validLeft = validateHelper(tree.left, min, tree.value, 'left');
//   // let validRight = 
//   return validLeft && validateHelper(tree.right, tree.value, max, 'right');;
// }

// return validateHelper(tree, -Infinity, Infinity);
//--------------


validateBst(tree)