class Review < ApplicationRecord
  belongs_to :list

  validates :comment, :rating, presence: true

  def since_when_minute
    @since_when_minute = ((Time.now - created_at) / 60).to_i
  end
end
