def num_of_paths_to_dest(n)
  if n == 1
    puts n, "<-inside base case"
    return 1
  end

  lastRow = []
  for i in (1..n-1)
    lastRow[i] = 1
  end

  currentRow = []

  for j in (1..n-1) do
    for i in (j..n-1) do
      if i == j
        currentRow[i] = lastRow[i]
      else
        currentRow[i] = currentRow[i - 1] + lastRow[i]
      end

      lastRow = currentRow
    end
  end

  return currentRow[n - 1]
end

puts num_of_paths_to_dest(4)
